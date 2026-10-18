import type { ReactNode } from 'react'
import Styles from '../Styles/card.module.css'
import { slugify } from '../Utilities/site'

type CardProps = {
  title: string
  /** A post section: anchored by its title, and listed in the page contents. */
  blogpost?: boolean
  children?: ReactNode
}

/* A pane of reading glass. Prose inside it — links, inline code, lists,
   code boxes and figures — is styled here, so posts are plain markup. */
const Card = ({ title, blogpost, children }: CardProps) => {
  if (blogpost) {
    const id = slugify(title)
    return (
      <section
        id={id}
        className={`lg lg--read ${Styles.card} ${Styles.post}`}
        aria-labelledby={`${id}-title`}
      >
        <h2 id={`${id}-title`} className={Styles.title}>
          {title}
        </h2>
        <div className={Styles.prose}>{children}</div>
      </section>
    )
  }
  return (
    <article className={`lg lg--read ${Styles.card}`}>
      <h2 className={Styles.title}>{title}</h2>
      <div className={Styles.prose}>{children}</div>
    </article>
  )
}

export default Card
