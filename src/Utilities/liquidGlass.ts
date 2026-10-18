/* ==========================================================================
   Liquid glass
   A TypeScript port of the home dashboard's js/glass.js. Real refraction for
   the glass panes, not just blur: each pane's backdrop runs through an SVG
   displacement filter whose map is generated for the pane's exact size and
   shape — neutral across the flat middle, bending hard inside a rim (the
   "bezel") the way a thick, rounded lens does. Over the line-wave wallpaper
   that bend is plainly visible: the lines kink as they pass under an edge.

   `backdrop-filter: url(#svg-filter)` is Chromium-only. Everywhere else, and
   whenever the OS asks for reduced transparency, panes keep the plain
   frosted `blur() saturate()` they are styled with in glass.css.

   Maps are painted per (width, height, radius, preset) and cached; panes of
   the same size share one filter. Only small panes use this — a map is a
   per-pixel loop, so it is kept off the long reading cards.
   ========================================================================== */

import { useEffect, type RefObject } from 'react'

const NS = 'http://www.w3.org/2000/svg'

export type LiquidPreset = 'capsule' | 'track' | 'dock' | 'panel'

type Preset = {
  /** Width of the refracting rim, CSS px. */
  bezel: number
  /** feDisplacementMap scale — the largest offset is scale / 2. */
  scale: number
  /** Falloff from rim to flat centre; higher keeps the middle clearer. */
  power: number
  /** RGB dispersion: each channel bends a little less than the last. */
  split: boolean
}

const PRESETS: Record<LiquidPreset, Preset> = {
  capsule: { bezel: 16, scale: 44, power: 2.4, split: true },
  track: { bezel: 10, scale: 26, power: 2.2, split: false },
  dock: { bezel: 15, scale: 40, power: 2.3, split: true },
  panel: { bezel: 22, scale: 46, power: 2.6, split: false },
}

type Owner = { preset: LiquidPreset; key: string | null; timer: number }
type Filter = { id: string; node: SVGFilterElement; users: number }

const MAP_CACHE_MAX = 32
const maps = new Map<string, string>()
const filters = new Map<string, Filter>()
const owners = new Map<HTMLElement, Owner>()
let defs: SVGDefsElement | null = null
let seq = 0

const lessTransparency =
  typeof matchMedia === 'function'
    ? matchMedia('(prefers-reduced-transparency: reduce)')
    : null

const observer =
  typeof ResizeObserver === 'function'
    ? new ResizeObserver((entries) =>
        entries.forEach((e) => onResize(e.target as HTMLElement))
      )
    : null

type UAData = { brands?: { brand: string }[] }

function supported() {
  const ua = (navigator as Navigator & { userAgentData?: UAData })
    .userAgentData
  const chromium = !!ua?.brands?.some((b) => /Chromium/i.test(b.brand))
  return chromium && !lessTransparency?.matches
}

function svg<K extends keyof SVGElementTagNameMap>(
  tag: K,
  attrs: Record<string, string | number> = {}
) {
  const node = document.createElementNS(NS, tag)
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v))
  return node
}

function ensureDefs() {
  if (defs) return defs
  const root = svg('svg', {
    width: 0,
    height: 0,
    'aria-hidden': 'true',
    focusable: 'false',
  })
  // Not display:none — a hidden <svg> takes its filters with it.
  root.style.cssText =
    'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none'
  defs = svg('defs')
  root.appendChild(defs)
  document.body.appendChild(root)
  return defs
}

/* R and G carry the x / y offset (128 = none). For every pixel inside the
   rim we take the outward normal of a rounded rectangle (via its signed
   distance field) and sample *inward* along it, so the rim shows the
   backdrop pulled from further inside the pane — the stretch and kink of a
   convex lens — and never reaches past the edge. */
function displacementMap(
  w: number,
  h: number,
  radius: number,
  bezel: number,
  power: number
) {
  const key = `${w}x${h}:${radius}:${bezel}:${power}`
  const hit = maps.get(key)
  if (hit) return hit

  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  const img = ctx.createImageData(w, h)
  const px = img.data

  const hw = w / 2
  const hh = h / 2
  const r = Math.max(0, Math.min(radius, hw, hh))
  const flatX = hw - bezel
  const flatY = hh - bezel

  for (let y = 0; y < h; y++) {
    const py = y + 0.5 - hh
    const ay = Math.abs(py)
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4
      px[i + 2] = 128
      px[i + 3] = 255

      const pxc = x + 0.5 - hw
      const ax = Math.abs(pxc)
      if (ax < flatX && ay < flatY) {
        px[i] = 128
        px[i + 1] = 128
        continue
      }

      const qx = ax - (hw - r)
      const qy = ay - (hh - r)
      let nx: number, ny: number, dist: number
      if (qx > 0 && qy > 0) {
        const len = Math.hypot(qx, qy)
        dist = len - r
        nx = (qx / len) * Math.sign(pxc)
        ny = (qy / len) * Math.sign(py)
      } else if (qx > qy) {
        dist = qx - r
        nx = Math.sign(pxc)
        ny = 0
      } else {
        dist = qy - r
        nx = 0
        ny = Math.sign(py)
      }

      const inset = -dist // 0 at the edge, growing toward the middle
      let m = 0
      if (inset <= 0) m = 1
      else if (inset < bezel) m = Math.pow(1 - inset / bezel, power)

      px[i] = Math.round(128 - nx * m * 127)
      px[i + 1] = Math.round(128 - ny * m * 127)
    }
  }

  ctx.putImageData(img, 0, 0)
  const url = canvas.toDataURL('image/png')
  maps.set(key, url)
  if (maps.size > MAP_CACHE_MAX) {
    const oldest = maps.keys().next().value
    if (oldest !== undefined) maps.delete(oldest)
  }
  return url
}

const CHANNELS = [
  '1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0',
  '0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0',
  '0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0',
]

function buildFilter(fid: string, w: number, h: number, href: string, p: Preset) {
  const f = svg('filter', {
    id: fid,
    x: 0,
    y: 0,
    width: w,
    height: h,
    filterUnits: 'userSpaceOnUse',
    primitiveUnits: 'userSpaceOnUse',
    // The map is data, not colour: keep it out of linearRGB or 128 stops
    // meaning "no offset".
    'color-interpolation-filters': 'sRGB',
  })
  f.appendChild(
    svg('feImage', {
      href,
      x: 0,
      y: 0,
      width: w,
      height: h,
      preserveAspectRatio: 'none',
      result: 'map',
    })
  )

  if (p.split) {
    const scales = [p.scale, p.scale * 0.92, p.scale * 0.84]
    CHANNELS.forEach((values, n) => {
      f.appendChild(
        svg('feDisplacementMap', {
          in: 'SourceGraphic',
          in2: 'map',
          scale: scales[n].toFixed(1),
          xChannelSelector: 'R',
          yChannelSelector: 'G',
          result: `d${n}`,
        })
      )
      f.appendChild(
        svg('feColorMatrix', {
          in: `d${n}`,
          type: 'matrix',
          values,
          result: `c${n}`,
        })
      )
    })
    f.appendChild(
      svg('feBlend', { in: 'c0', in2: 'c1', mode: 'screen', result: 'c01' })
    )
    f.appendChild(svg('feBlend', { in: 'c01', in2: 'c2', mode: 'screen' }))
  } else {
    f.appendChild(
      svg('feDisplacementMap', {
        in: 'SourceGraphic',
        in2: 'map',
        scale: p.scale,
        xChannelSelector: 'R',
        yChannelSelector: 'G',
      })
    )
  }
  return f
}

/** The SDF models circular corners. `corner-shape: squircle` sits further
    out along the diagonal — about a 0.55× circle — so match that. */
function effectiveRadius(el: HTMLElement, w: number, h: number) {
  const cs = getComputedStyle(el)
  const raw = parseFloat(cs.borderTopLeftRadius) || 0
  const r = Math.min(raw, w / 2, h / 2)
  const shape =
    cs.getPropertyValue('corner-top-left-shape') ||
    cs.getPropertyValue('corner-shape') ||
    ''
  return Math.round(/squircle|superellipse/.test(shape) ? r * 0.55 : r)
}

function release(key: string) {
  const f = filters.get(key)
  if (!f) return
  f.users -= 1
  if (f.users <= 0) {
    f.node.remove()
    filters.delete(key)
  }
}

function apply(el: HTMLElement) {
  const own = owners.get(el)
  if (!own) return
  if (!el.isConnected) {
    detach(el)
    return
  }

  const w = Math.round(el.offsetWidth)
  const h = Math.round(el.offsetHeight)
  if (!w || !h) return

  const p = PRESETS[own.preset]
  const radius = effectiveRadius(el, w, h)
  const key = `${own.preset}:${w}x${h}:${radius}`

  if (key !== own.key) {
    let f = filters.get(key)
    if (!f) {
      const href = displacementMap(
        w,
        h,
        radius,
        Math.min(p.bezel, w / 2, h / 2),
        p.power
      )
      if (!href) return
      const fid = `lg-${++seq}`
      f = { id: fid, node: buildFilter(fid, w, h, href, p), users: 0 }
      ensureDefs().appendChild(f.node)
      filters.set(key, f)
    }
    f.users += 1
    if (own.key) release(own.key)
    own.key = key
    el.style.setProperty('--lg-refract', `url(#${f.id})`)
  }
  el.classList.add('is-liquid')
}

/* A map drawn for the old size would leave the new area unmapped — and an
   unmapped pixel reads as maximum offset. Drop to plain frost at once, then
   redraw for the new size when resizing settles. */
function onResize(el: HTMLElement) {
  const own = owners.get(el)
  if (!own) return
  const w = Math.round(el.offsetWidth)
  const h = Math.round(el.offsetHeight)
  if (own.key && own.key.includes(`:${w}x${h}:`)) return
  el.classList.remove('is-liquid')
  window.clearTimeout(own.timer)
  own.timer = window.setTimeout(() => apply(el), own.key ? 140 : 0)
}

export function attach(el: HTMLElement, preset: LiquidPreset) {
  if (!supported()) return
  if (owners.has(el)) {
    owners.get(el)!.preset = preset
    onResize(el)
    return
  }
  owners.set(el, { preset, key: null, timer: 0 })
  observer?.observe(el)
  apply(el)
}

export function detach(el: HTMLElement) {
  const own = owners.get(el)
  if (!own) return
  window.clearTimeout(own.timer)
  observer?.unobserve(el)
  if (own.key) release(own.key)
  owners.delete(el)
  el.classList.remove('is-liquid')
  el.style.removeProperty('--lg-refract')
}

lessTransparency?.addEventListener('change', () => {
  for (const el of [...owners.keys()]) {
    if (supported()) apply(el)
    else el.classList.remove('is-liquid')
  }
})

/** Gives an element real refraction at its rim for as long as it is
    mounted — and, given `when`, only while that media query matches.

    Only for panes with nothing but the wallpaper behind them. Chromium
    drops the rest of a backdrop-filter chain after a url() filter, so a
    refracting pane has no frost: fine over the line art (the dashboard
    runs its glass at ~1px frost anyway), but sticky or fixed chrome that
    text scrolls under needs its blur. */
export function useLiquidGlass(
  ref: RefObject<HTMLElement | null>,
  preset: LiquidPreset = 'panel',
  when?: string
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!when) {
      attach(el, preset)
      return () => detach(el)
    }
    const mq = matchMedia(when)
    const sync = () => (mq.matches ? attach(el, preset) : detach(el))
    sync()
    mq.addEventListener('change', sync)
    return () => {
      mq.removeEventListener('change', sync)
      detach(el)
    }
  }, [ref, preset, when])
}
