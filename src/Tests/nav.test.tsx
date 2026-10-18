import { createMemoryRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { describe, expect, it } from 'vitest'
import { render, screen, within } from '../Utilities/test-utils'
import Nav from '../Components/nav'

const renderAt = (path: string) =>
  render(
    <RouterProvider
      router={createMemoryRouter([{ path: '*', Component: Nav }], {
        initialEntries: [path],
      })}
    />
  )

describe('Nav', () => {
  it('Nav renders all navigation links', () => {
    renderAt('/')
    const nav = screen.getByRole('navigation', { name: 'Main' })
    for (const name of [
      'Home',
      '.NET and C#',
      'Web Development',
      'DevOps',
      'Machine Learning',
    ]) {
      expect(within(nav).getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('marks the current page', () => {
    renderAt('/devops')
    expect(screen.getByRole('link', { name: 'DevOps' })).toHaveAttribute(
      'aria-current',
      'page'
    )
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute(
      'aria-current'
    )
  })

  it('links the brand back home', () => {
    renderAt('/devops')
    expect(
      screen.getByRole('link', { name: 'Alex Beesley — home' })
    ).toHaveAttribute('href', '/')
  })
})
