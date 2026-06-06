import { describe, expect, it } from 'vitest';
import { render, screen } from '../Utilities/test-utils';
import Card from '../Components/card';

describe('Card', () => {
  it('Card is rendered with title and children', () => {
    render(
      <Card title={'test'}>
        <p>children</p>
      </Card>
    )
    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByText(/children/i)).toBeInTheDocument()
  })

  it('Card renders as blogpost when blogpost prop is true', () => {
    render(
      <Card title={'blog title'} blogpost={true}>
        <p>blog content</p>
      </Card>
    )
    expect(screen.getByText(/blog title/i)).toBeInTheDocument()
    expect(screen.getByText(/blog content/i)).toBeInTheDocument()
  })
})