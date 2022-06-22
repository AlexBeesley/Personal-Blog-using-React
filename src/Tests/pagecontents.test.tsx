import { describe, expect, it } from 'vitest';
import { render, screen } from '../Utilities/test-utils';
import PageContents from '../Components/pagecontents';

describe('PageContents', () => {
  render(
    <PageContents links={['#p1', '#p2', '#p3']} titles={['test1', 'test2', 'test3']}/>
  )

  it('PageContents is rendered', () => {
    expect(screen.getByText(/test1/i)).toBeInTheDocument()
  })
})