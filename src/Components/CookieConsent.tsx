import { useEffect, useState } from "react";
import Styles from "../Styles/cookieconsent.module.scss";
import Img from "../Images/cookie.png";

const body = document.body
body.style.overflow = 'hidden';

export default function CookieConsent() {
    let data = window.localStorage.getItem('COOKIE_KEY')
    if (data !== null) {
      data = JSON.parse(data);
    }

    const [cookie, setCookie] = useState(
      () => data || false
    );
    
    useEffect(() => {
      window.localStorage.setItem('COOKIE_KEY', JSON.stringify(cookie));
    }, [cookie]);

    console.log("cookie:", cookie);

    if (!cookie) {
        return (
            <div id={Styles.cookieConsent}>
                <div className={Styles.overlay} />
                <div className={Styles.cookieConsent}>
                    <img className={Styles.image} src={Img} />
                    <p className={Styles.text}>This website uses cookies to ensure you get the best experience.{' '}
                        <a className={Styles.inlineLink} href="https://ico.org.uk/for-organisations/guide-to-pecr/cookies-and-similar-technologies/#:~:text=You%20cannot%20show%20consent%20if,user%20has%20consented%20to%20them.">Find out more</a>
                    </p>
                    <button className={Styles.btn} onClick={() => consented()}>Got it!</button>
                </div>
            </div>
        )
    }

    else {
        body.style.overflow = 'auto';
        return null;
    }

    function consented() {
        console.log("consented to use of cookies.");
        setCookie(!cookie)
        console.log("cookie:", cookie);
        const root = document.getElementById(Styles.cookieConsent);
        body.style.overflow = 'auto';
        if (root) {
            root.style.display = 'none';
        }
    }
}