/* The environment the glass sits in: the wallpaper behind it, and the beam
   of light that sweeps across every pane once the page has settled. Both
   are ports of the home dashboard's initWallpaper / initBeam. */

import wide from '../Images/backdrop.webp'
import portrait from '../Images/backdrop-portrait.webp'

/* The master is a 32:9 panorama; on a phone `cover` would show a sliver of
   it and spend 800KB doing so. Portrait and small screens get a square
   crop of its most colourful stretch instead. */
const WIDE_SCREEN = '(min-width: 1024px) and (min-aspect-ratio: 1/1)'

export function initWallpaper() {
  const ground = document.querySelector<HTMLElement>('.wallpaper')
  if (!ground) return
  const mq = matchMedia(WIDE_SCREEN)

  const show = () => {
    const src = mq.matches ? wide : portrait
    const probe = new Image()
    probe.onload = () => {
      ground.style.setProperty('--wallpaper', `url("${src}")`)
      document.documentElement.classList.add('has-wallpaper')
    }
    probe.src = src
  }

  show()
  mq.addEventListener('change', show)
}

function motionAllowed() {
  return !matchMedia('(prefers-reduced-motion: reduce)').matches
}

/* Each pane is told where it sits in the viewport (--ox/--oy) so it can draw
   its own slice of the same band; the root's --beam animation moves them
   all together. */
export function sweepBeam() {
  if (!motionAllowed() || document.hidden) return
  const root = document.documentElement
  for (const pane of document.querySelectorAll<HTMLElement>('.lg')) {
    const r = pane.getBoundingClientRect()
    pane.style.setProperty('--ox', `${r.left.toFixed(1)}px`)
    pane.style.setProperty('--oy', `${r.top.toFixed(1)}px`)
  }
  root.classList.remove('is-beaming')
  void root.offsetWidth // restart the animation
  root.classList.add('is-beaming')
}

if (typeof document !== 'undefined') {
  document.documentElement.addEventListener('animationend', (e) => {
    if (e.target === document.documentElement && e.animationName === 'beam') {
      document.documentElement.classList.remove('is-beaming')
    }
  })
}

/* Pointer light and tilt, for a row of panes (the home page's shelves).
   Rims brighten toward the pointer — including panes next to the one you
   are over, which is what makes the row read as one lit surface — and the
   pane under the pointer tips toward it and swells a little. One
   rAF-throttled handler; nothing runs when the pointer is elsewhere. */
export function attachPointerLight(row: HTMLElement) {
  let raf = 0
  let last: PointerEvent | null = null

  const panes = () => [...row.children] as HTMLElement[]

  const paint = () => {
    raf = 0
    if (!last) return
    const { clientX: x, clientY: y } = last
    const tilt = motionAllowed()
    for (const pane of panes()) {
      const r = pane.getBoundingClientRect()
      const dx = Math.max(r.left - x, 0, x - r.right)
      const dy = Math.max(r.top - y, 0, y - r.bottom)
      const reach = Math.max(0, 1 - Math.hypot(dx, dy) / 260)
      pane.style.setProperty('--mx', `${(x - r.left).toFixed(1)}px`)
      pane.style.setProperty('--my', `${(y - r.top).toFixed(1)}px`)
      pane.style.setProperty('--glow', reach.toFixed(3))

      if (!tilt) continue
      const inside = x >= r.left && x <= r.right && y >= r.top && y <= r.bottom
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const near = Math.max(0, 1 - Math.hypot(x - cx, y - cy) / (r.width * 1.6))
      pane.style.setProperty('--sw', (1 + (inside ? 0.025 : near * 0.01)).toFixed(4))
      pane.style.setProperty('--tx', inside ? `${(((y - cy) / r.height) * -6).toFixed(2)}deg` : '0deg')
      pane.style.setProperty('--ty', inside ? `${(((x - cx) / r.width) * 6).toFixed(2)}deg` : '0deg')
    }
  }

  const onMove = (e: PointerEvent) => {
    if (e.pointerType === 'touch') return
    last = e
    if (!raf) raf = requestAnimationFrame(paint)
  }

  const onLeave = () => {
    last = null
    for (const pane of panes()) {
      pane.style.setProperty('--glow', '0')
      pane.style.removeProperty('--tx')
      pane.style.removeProperty('--ty')
      pane.style.removeProperty('--sw')
    }
  }

  row.addEventListener('pointermove', onMove, { passive: true })
  row.addEventListener('pointerleave', onLeave)
  return () => {
    cancelAnimationFrame(raf)
    row.removeEventListener('pointermove', onMove)
    row.removeEventListener('pointerleave', onLeave)
  }
}
