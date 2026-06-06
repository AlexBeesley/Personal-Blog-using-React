import Styles from '../Styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Alexander Beesley; All rights reserved.
      </p>
      <div className={Styles.iconContainer}>
        <a href="mailto:david.beesley1234@gmail.com" aria-label="Send email" title="Email">
          <i className="fa-solid fa-envelope" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-beesley-bb1814206/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
        >
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/brighton_by_the_sea/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram profile"
          title="Instagram"
        >
          <i className="fa-brands fa-instagram" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/AlexBeesley"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          title="GitHub"
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  )
}
