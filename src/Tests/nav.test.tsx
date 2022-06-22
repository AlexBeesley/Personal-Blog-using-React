import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../Utilities/test-utils';
import Nav from '../Components/nav';

describe('Nav', () => {
  render(
    <BrowserRouter>
        <Nav/>
    </BrowserRouter>
  )
  
  it('Nav is rendered', () => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
  })
})