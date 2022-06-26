import { describe, expect, it } from 'vitest';
import { render, screen } from '../Utilities/test-utils';
import Card from '../Components/card';

describe('Card', () => {
  render(
    <Card title={'test'}>
      <p>children</p>
    </Card>
  )
  
  it('Card is rendered', () => {
    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByText(/children/i)).toBeInTheDocument()
  })

  
})