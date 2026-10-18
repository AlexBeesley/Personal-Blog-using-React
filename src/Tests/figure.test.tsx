import { describe, expect, it } from 'vitest'
import { render, screen, userEvent } from '../Utilities/test-utils'
import Figure from '../Components/Figure'

describe('Figure', () => {
  const renderFigure = () =>
    render(
      <Figure
        src="/shot.webp"
        alt="A screenshot"
        width={1920}
        height={1050}
        caption="The caption"
      />
    )

  it('renders a lazy image with its alt text, size and caption', () => {
    renderFigure()
    const img = screen.getByRole('img', { name: 'A screenshot' })
    expect(img).toHaveAttribute('loading', 'lazy')
    expect(img).toHaveAttribute('width', '1920')
    expect(
      screen.getByText('The caption', { selector: 'figcaption' })
    ).toBeInTheDocument()
  })

  it('opens the image in a dialog and closes it again', async () => {
    const user = userEvent.setup()
    renderFigure()
    await user.click(
      screen.getByRole('button', { name: 'Enlarge image: A screenshot' })
    )
    const dialog = screen.getByRole('dialog', { name: 'A screenshot' })
    expect(dialog).toHaveAttribute('open')
    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(dialog).not.toHaveAttribute('open')
  })
})
