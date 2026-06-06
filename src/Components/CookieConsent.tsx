import { useEffect, useState } from "react";
import Styles from "../Styles/cookieconsent.module.scss";
import Img from "../Images/cookie.png";

export default function CookieConsent() {
    const [consentGiven, setConsentGiven] = useState(() => {
      const data = window.localStorage.getItem('COOKIE_KEY');
      return data !== null ? JSON.parse(data) : false;
    });

    useEffect(() => {
      window.localStorage.setItem('COOKIE_KEY', JSON.stringify(consentGiven));
    }, [consentGiven]);

    useEffect(() => {
      document.body.style.overflow = !consentGiven ? 'hidden' : 'auto';
      return () => { document.body.style.overflow = 'auto'; };
    }, [consentGiven]);

    if (consentGiven) {
        return null;
    }

    return (
        <div id={Styles.cookieConsent} role="alertdialog" aria-modal="true" aria-label="Cookie consent">
            <div className={Styles.overlay} aria-hidden="true" />
            <div className={Styles.cookieConsent}>
                <img className={Styles.image} src={Img} alt="Cookie icon" />
                <p className={Styles.text}>This website uses cookies to ensure you get the best experience.{' '}
                    <a className={Styles.inlineLink} href="https://ico.org.uk/for-organisations/guide-to-pecr/cookies-and-similar-technologies/#:~:text=You%20cannot%20show%20consent%20if,user%20has%20consented%20to%20them.">Find out more</a>
                </p>
                <button className={Styles.btn} onClick={() => setConsentGiven(true)}>Got it!</button>
            </div>
        </div>
    );
}