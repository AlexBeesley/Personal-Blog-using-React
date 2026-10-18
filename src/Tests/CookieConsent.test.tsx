import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen, userEvent } from '../Utilities/test-utils'
import CookieConsent from '../Components/CookieConsent'

describe('CookieConsent', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders cookie consent banner when not consented', () => {
    render(<CookieConsent />)
    expect(screen.getByText(/This website uses cookies/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Got it!/i })).toBeInTheDocument()
  })

  it('does not render banner when consent already given', () => {
    window.localStorage.setItem('COOKIE_KEY', JSON.stringify(true))
    const { container } = render(<CookieConsent />)
    expect(container.innerHTML).toBe('')
  })

  it('is a labelled region that leaves the page usable', () => {
    render(<CookieConsent />)
    expect(
      screen.getByRole('region', { name: 'Cookie consent' })
    ).toBeInTheDocument()
    expect(document.body.style.overflow).not.toBe('hidden')
  })

  it('remembers consent once accepted', async () => {
    const { container } = render(<CookieConsent />)
    await userEvent.click(screen.getByRole('button', { name: /Got it!/i }))
    expect(container.innerHTML).toBe('')
    expect(window.localStorage.getItem('COOKIE_KEY')).toBe('true')
  })
})
