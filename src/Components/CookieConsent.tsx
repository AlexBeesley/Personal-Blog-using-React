import { useState } from 'react'
import Styles from '../Styles/cookieconsent.module.css'
import Icon from './Icons'

const KEY = 'COOKIE_KEY'

function readConsent() {
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? 'false') === true
  } catch {
    return false
  }
}

/* A glass island over the foot of the page — it no longer locks the page
   behind an overlay, so the post can be read before it is dismissed. */
export default function CookieConsent() {
  const [consentGiven, setConsentGiven] = useState(readConsent)

  if (consentGiven) {
    return null
  }

  const accept = () => {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(true))
    } catch {
      // Storage blocked: the island simply returns on the next visit.
    }
    setConsentGiven(true)
  }

  return (
    <section className={`lg ${Styles.island}`} aria-label="Cookie consent">
      <span className={Styles.icon} aria-hidden="true">
        <Icon name="cookie" size={22} />
      </span>
      <p className={Styles.text}>
        This website uses cookies to ensure you get the best experience.{' '}
        <a
          className={Styles.link}
          href="https://ico.org.uk/for-organisations/guide-to-pecr/cookies-and-similar-technologies/"
          target="_blank"
          rel="noreferrer"
        >
          Find out more
        </a>
      </p>
      <button type="button" className={`btn btn--primary ${Styles.ok}`} onClick={accept}>
        Got it!
      </button>
    </section>
  )
}
