import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '../Utilities/test-utils';
import Nav from '../Components/nav';

describe('Nav', () => {
  it('Nav renders all navigation links', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    )
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
    expect(screen.getByText(/\.NET and C#/i)).toBeInTheDocument()
    expect(screen.getByText(/Web Development/i)).toBeInTheDocument()
    expect(screen.getByText(/DevOps/i)).toBeInTheDocument()
    expect(screen.getByText(/Machine Learning/i)).toBeInTheDocument()
  })
})