import { describe, expect, it } from 'vitest';
import { render, screen } from '../Utilities/test-utils';
import Footer from '../Components/footer';

describe('Footer', () => {
  it('Footer is rendered with copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Alexander Beesley/i)).toBeInTheDocument()
  })

  it('Footer contains social links with aria-labels', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/LinkedIn profile/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/GitHub profile/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Instagram profile/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Send email/i)).toBeInTheDocument()
  })

  it('Footer social links open in new tab', () => {
    render(<Footer />)
    const linkedin = screen.getByLabelText(/LinkedIn profile/i)
    expect(linkedin).toHaveAttribute('target', '_blank')
    expect(linkedin).toHaveAttribute('rel', 'noreferrer')
  })
})