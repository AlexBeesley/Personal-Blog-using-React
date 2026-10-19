import { beforeEach, describe, expect, it } from 'vitest'
import { createMemoryRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { render, screen } from '../Utilities/test-utils'
import { routes } from '../App'

const renderAt = (path: string) =>
  render(
    <RouterProvider
      router={createMemoryRouter(routes, { initialEntries: [path] })}
    />
  )

describe('App', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('renders the home page with its topic shelves', () => {
    renderAt('/')
    expect(
      screen.getByRole('heading', { level: 1, name: 'Alexander Beesley' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /self-portrait of alexander beesley/i })
    ).toBeInTheDocument()
    const explore = screen.getByRole('region', { name: /explore the log/i })
    expect(explore.querySelectorAll('li')).toHaveLength(5)
    expect(
      screen.getByRole('link', { name: /recent work.*umbraco/i })
    ).toHaveAttribute('href', '/umbraco')
  })

  it('loads a post on demand, with its page contents', async () => {
    renderAt('/devops')
    expect(
      await screen.findByRole('heading', { level: 1, name: 'DevOps' })
    ).toBeInTheDocument()
    const contents = screen.getByRole('navigation', { name: 'On this page' })
    expect(contents.querySelector('a[href="#agile-working"]')).not.toBeNull()
    expect(document.getElementById('agile-working')).not.toBeNull()
  })

  it('loads the Umbraco post with its code samples', async () => {
    renderAt('/umbraco')
    expect(
      await screen.findByRole('heading', { level: 1, name: 'Umbraco' })
    ).toBeInTheDocument()
    expect(document.getElementById('umbraco-17-and-ai-agents')).not.toBeNull()
    expect(document.title).toBe('Umbraco · Alexander Beesley')
    expect(
      screen.getByText(/Server role explicitly configured/)
    ).toBeInTheDocument()
  })

  it('shows the 404 page for an unknown route', async () => {
    renderAt('/nowhere')
    expect(
      await screen.findByRole('heading', { name: 'Page not found' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /back home/i })).toHaveAttribute(
      'href',
      '/'
    )
  })
})
