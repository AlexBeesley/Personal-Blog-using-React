/* In-page links (the skip link, the page contents) scroll here rather than
   through a native hash navigation: the browser reports those to the router
   as a history pop, and ScrollRestoration would then try to "restore" a
   position for an entry it never saw. The hash is still written to the
   address bar, on the router's own history entry, so links stay shareable. */
export function jumpTo(
  id: string,
  { focus = false, instant = false }: { focus?: boolean; instant?: boolean } = {}
) {
  const target = document.getElementById(id)
  if (!target) return
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({
    behavior: instant || still ? 'auto' : 'smooth',
    block: 'start',
  })
  if (focus) target.focus({ preventScroll: true })
  if (id !== 'main') {
    window.history.replaceState(window.history.state, '', `#${id}`)
  }
}
