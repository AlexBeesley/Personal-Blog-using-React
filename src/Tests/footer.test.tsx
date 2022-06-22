import { describe, expect, it } from 'vitest';
import { render, screen } from '../Utilities/test-utils';
import Footer from '../Components/footer';

describe('Footer', () => {
  render(
    <Footer/>
  )
  
  it('Footer is rendered', () => {
    expect(screen.getByText(/Alexander Beesley/i)).toBeInTheDocument()
  })
})