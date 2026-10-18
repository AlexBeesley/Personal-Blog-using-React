import { useRef, type MouseEvent, type ReactNode } from 'react'
import Styles from '../Styles/figure.module.css'
import Icon from './Icons'

type FigureProps = {
  src: string
  alt: string
  width: number
  height: number
  caption?: ReactNode
}

/* A screenshot in a post. Most are 1920px captures of code and tools, so on
   a phone they open full-screen in a native <dialog> wearing the
   dashboard's modal glass. */
export default function Figure({ src, alt, width, height, caption }: FigureProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const open = () => dialogRef.current?.showModal()
  const close = () => dialogRef.current?.close()

  // A click on the dialog's own box is a click on the backdrop around the
  // image: dismiss, as a light-dismiss popover would.
  const onDialogClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) close()
  }

  return (
    <figure className={Styles.figure}>
      <button
        type="button"
        className={Styles.frame}
        onClick={open}
        aria-label={`Enlarge image: ${alt}`}
      >
        <img
          className={Styles.image}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
        <span className={Styles.hint} aria-hidden="true">
          <Icon name="expand" size={16} />
        </span>
      </button>
      {caption && <figcaption className={Styles.caption}>{caption}</figcaption>}

      {/* eslint-disable-next-line jsx-a11y-x/no-noninteractive-element-interactions, jsx-a11y-x/click-events-have-key-events -- Esc closes a modal dialog natively; the click only adds backdrop dismissal. */}
      <dialog
        ref={dialogRef}
        className={`lg ${Styles.viewer}`}
        aria-label={alt}
        onClick={onDialogClick}
      >
        <img
          className={Styles.full}
          src={src}
          alt=""
          width={width}
          height={height}
          decoding="async"
        />
        {caption && <p className={Styles.viewerCaption}>{caption}</p>}
        <button
          type="button"
          className={Styles.close}
          onClick={close}
          aria-label="Close"
        >
          <Icon name="close" size={18} />
        </button>
      </dialog>
    </figure>
  )
}
