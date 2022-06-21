import { describe, expect, it, vi } from 'vitest';
import { Card } from '../Components/card';
import { render, screen, userEvent } from '../Utilities/test-utils';

describe('Card', () => {
  it('Card is rendered', () => {
    render(<Card title={'test'}><p>children</p></Card>);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText(/children/i)).toBeInTheDocument();
  })
})