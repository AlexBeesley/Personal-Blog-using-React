import { useEffect, type MouseEvent } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import Styles from '../Styles/layout.module.css'
import { sweepBeam } from '../Utilities/ambient'
import { jumpTo } from '../Utilities/jump'
import CookieConsent from './CookieConsent'
import Footer from './footer'
import Nav from './nav'

export default function Layout() {
  const { pathname } = useLocation()

  // One sweep of light across every pane once the page has settled.
  useEffect(() => {
    const t = window.setTimeout(sweepBeam, 1300)
    return () => window.clearTimeout(t)
  }, [])

  const skip = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    jumpTo('main', { focus: true, instant: true })
  }

  return (
    <>
      <a className="skip-link" href="#main" onClick={skip}>
        Skip to content
      </a>
      <Nav />
      {/* Keyed by path: each page mounts fresh and its panes rise in. */}
      <main id="main" key={pathname} className={Styles.main} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
      <ScrollRestoration />
    </>
  )
}
