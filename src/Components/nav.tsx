import { useLayoutEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import Styles from '../Styles/nav.module.css'
import { useLiquidGlass } from '../Utilities/liquidGlass'
import { navItems, siteName } from '../Utilities/site'
import Icon from './Icons'

/* One nav, two shapes. On phones and tablets it is the dashboard's dock: a
   glass pill fixed under the thumb, icons only, the current page opening
   out to show its name. From 1080px it moves up beside the brand as a
   labelled track — the dashboard's search-engine switcher — with one
   highlight that springs between items. */
export default function Nav() {
  const brandRef = useRef<HTMLAnchorElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const thumbRef = useRef<HTMLSpanElement>(null)
  const { pathname } = useLocation()

  // The brand refracts the wallpaper while it scrolls with the page; once
  // it is sticky (desktop), posts pass under it and it needs its frost.
  useLiquidGlass(brandRef, 'capsule', '(max-width: 1079px)')

  // Move the track's highlight onto the current item. It only animates
  // once it has been placed, so it does not fly in from the left on load.
  useLayoutEffect(() => {
    const nav = navRef.current
    const thumb = thumbRef.current
    if (!nav || !thumb) return

    const place = () => {
      const active = nav.querySelector<HTMLElement>('[aria-current="page"]')
      thumb.style.opacity = active ? '' : '0'
      if (!active) return
      thumb.style.setProperty('--thumb-x', `${active.offsetLeft}px`)
      thumb.style.setProperty('--thumb-w', `${active.offsetWidth}px`)
    }

    place()
    const frame = requestAnimationFrame(() => {
      thumb.dataset.ready = ''
    })
    const ro = new ResizeObserver(place)
    ro.observe(nav)
    document.fonts?.ready.then(place)
    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
    }
  }, [pathname])

  return (
    <header className={Styles.header}>
      <Link
        ref={brandRef}
        to="/"
        className={`lg lg--lift ${Styles.brand}`}
        aria-label={`${siteName} — home`}
      >
        <span className={Styles.orb} aria-hidden="true" />
        <span className={Styles.brandText}>
          <span className={Styles.name}>{siteName}</span>
          <span className={Styles.role}>Full stack developer</span>
        </span>
      </Link>

      <nav ref={navRef} className={`lg ${Styles.nav}`} aria-label="Main">
        <ul className={Styles.list}>
          {navItems.map(({ path, label, short, icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                end
                className={({ isActive }) =>
                  isActive ? `${Styles.link} ${Styles.active}` : Styles.link
                }
              >
                <Icon name={icon} size={21} />
                <span className={Styles.label}>{label}</span>
                <span className={Styles.short} aria-hidden="true">
                  {short}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        <span ref={thumbRef} className={Styles.thumb} aria-hidden="true" />
      </nav>
    </header>
  )
}
