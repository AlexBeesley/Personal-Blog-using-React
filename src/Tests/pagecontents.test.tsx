import { describe, expect, it } from 'vitest';
import { render, screen } from '../Utilities/test-utils';
import PageContents from '../Components/pagecontents';

describe('PageContents', () => {
  it('PageContents renders all titles', () => {
    render(
      <PageContents links={['#p1', '#p2', '#p3']} titles={['test1', 'test2', 'test3']} />
    )
    expect(screen.getByText(/test1/i)).toBeInTheDocument()
    expect(screen.getByText(/test2/i)).toBeInTheDocument()
    expect(screen.getByText(/test3/i)).toBeInTheDocument()
  })

  it('PageContents renders correct links', () => {
    render(
      <PageContents links={['p1', 'p2']} titles={['Title 1', 'Title 2']} />
    )
    const link1 = screen.getByText(/Title 1/i).closest('a')
    expect(link1).toHaveAttribute('href', '#p1')
  })
})