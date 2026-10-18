import { useEffect, type ReactNode } from 'react'
import Styles from '../Styles/post.module.css'
import { jumpTo } from '../Utilities/jump'
import { siteName, slugify } from '../Utilities/site'
import PageContents from './pagecontents'

type PostProps = {
  title: string
  /** Section titles, in order; each matches a `<Card blogpost>` title. */
  sections: string[]
  children: ReactNode
}

/* The frame every post shares: its title in the display script, the page
   contents, and the column of section cards. */
export default function Post({ title, sections, children }: PostProps) {
  // A link straight to a section (/devops#azure): the post arrives as a
  // lazy chunk, after the router has already looked for the anchor, so go
  // to it here — and again once the web fonts have settled the layout.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    jumpTo(id, { instant: true })
    document.fonts?.ready.then(() => jumpTo(id, { instant: true }))
  }, [])

  return (
    <>
      <title>{`${title} · ${siteName}`}</title>
      <header className={Styles.head}>
        <p className="eyebrow">
          Learning log · {sections.length} sections
        </p>
        <h1 className={`display is-writing ${Styles.title}`}>{title}</h1>
      </header>
      <div className={Styles.layout}>
        <PageContents titles={sections} links={sections.map(slugify)} />
        <div className={Styles.sections}>{children}</div>
      </div>
    </>
  )
}
