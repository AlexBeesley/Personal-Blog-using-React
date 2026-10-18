import { Link } from 'react-router'
import Icon from '../Components/Icons'
import Styles from '../Styles/errorpage.module.css'
import { siteName } from '../Utilities/site'

function ErrorPage() {
  return (
    <section className={`lg lg--read ${Styles.panel}`} aria-labelledby="not-found">
      <title>{`Page not found · ${siteName}`}</title>
      <span className={Styles.icon} aria-hidden="true">
        <Icon name="compass" size={28} />
      </span>
      <p className="eyebrow">404</p>
      <h1 id="not-found" className={`display ${Styles.title}`}>
        Page not found
      </h1>
      <p className={Styles.text}>
        That page doesn&rsquo;t exist, or it has moved. Everything on the site is
        a click away from home.
      </p>
      <Link to="/" className="btn btn--primary">
        <Icon name="home" size={16} />
        Back home
      </Link>
    </section>
  )
}

export default ErrorPage
