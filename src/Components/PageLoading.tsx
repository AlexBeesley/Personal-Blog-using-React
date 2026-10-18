import Styles from '../Styles/pageloading.module.css'

/* Holds the content area while a post's chunk arrives on a cold load. */
export default function PageLoading() {
  return (
    <div className={Styles.loading} role="status">
      <span className="sr-only">Loading…</span>
      <div className={Styles.title} aria-hidden="true" />
      <div className={`lg lg--read ${Styles.pane}`} aria-hidden="true" />
    </div>
  )
}
