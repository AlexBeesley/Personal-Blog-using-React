import { useEffect, useRef, useState, type MouseEvent } from 'react'
import Styles from '../Styles/pagecontents.module.css'
import { jumpTo } from '../Utilities/jump'
import Icon from './Icons'

type Props = {
  /** Section ids, in page order. */
  links: string[]
  titles: string[]
}

/* The page's contents. On phones, a sticky glass track of chips across the
   top of the post; from 1200px, a sticky sidebar. Either way the section
   you are reading is marked as you scroll. */
export default function PageContents({ links, titles }: Props) {
  const listRef = useRef<HTMLOListElement>(null)
  const [active, setActive] = useState(links[0])

  // Scroll-spy: the current section is the last one whose top has passed
  // just under the sticky chrome.
  useEffect(() => {
    let raf = 0
    const read = () => {
      raf = 0
      const line =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--chrome-top'
          )
        ) + 24 || 100
      let current = links[0]
      for (const id of links) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      // At the very bottom, the last section wins even if it is short.
      const end =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      setActive(end ? links[links.length - 1] : current)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(read)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [links])

  // Keep the current chip in view when the track scrolls sideways.
  useEffect(() => {
    const list = listRef.current
    const chip = list?.querySelector<HTMLElement>('[aria-current]')
    if (!list || !chip || list.scrollWidth <= list.clientWidth) return
    const left = chip.offsetLeft - (list.clientWidth - chip.offsetWidth) / 2
    list.scrollTo({ left, behavior: 'smooth' })
  }, [active])

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    jumpTo(id)
  }

  return (
    <nav className={`lg ${Styles.toc}`} aria-label="On this page">
      <p className={`eyebrow ${Styles.heading}`}>
        <Icon name="list" size={16} />
        On this page
      </p>
      <ol ref={listRef} className={Styles.list}>
        {titles.map((title, index) => {
          const id = links[index]
          return (
            <li key={id}>
              <a
                className={Styles.link}
                href={`#${id}`}
                aria-current={active === id ? 'location' : undefined}
                onClick={(e) => go(e, id)}
              >
                <span className={Styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{title}</span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
