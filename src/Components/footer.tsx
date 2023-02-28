import Styles from '../Styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <p>
        &copy; 2023 Alex Beesley; All rights reserved.
      </p>
      <div className={Styles.iconContainer}>
        <a href="mailto:david.beesley1234@gmail.com" title="Email">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-beesley-bb1814206/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/brighton_by_the_sea/"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://github.com/AlexBeesley"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </footer>
  )
}
