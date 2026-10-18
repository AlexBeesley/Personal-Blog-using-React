import { useRef } from 'react'
import Styles from '../Styles/footer.module.css'
import { useLiquidGlass } from '../Utilities/liquidGlass'
import { author, socials } from '../Utilities/site'
import Icon from './Icons'

const year = new Date().getFullYear()

export default function Footer() {
  const barRef = useRef<HTMLDivElement>(null)
  // Nothing scrolls under the footer, so it can refract the wallpaper.
  useLiquidGlass(barRef, 'dock')

  return (
    <footer className={Styles.footer}>
      <div ref={barRef} className={`lg ${Styles.bar}`}>
        <p className={Styles.copy}>
          &copy; {year} {author}
          <span className={Styles.rights}> · All rights reserved</span>
        </p>
        <ul className={Styles.socials}>
          {socials.map(({ href, label, title, icon, external }) => (
            <li key={href}>
              <a
                className={Styles.social}
                href={href}
                aria-label={label}
                title={title}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <Icon name={icon} size={19} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
