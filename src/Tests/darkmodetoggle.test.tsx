import { describe, expect, it } from 'vitest';
import { render, screen, userEvent } from '../Utilities/test-utils';
import DarkModeToggle from '../Components/darkmodetoggle';

describe('DarkModeToggle', () => {
  it('DarkModeToggle is rendered', () => {
    render(<DarkModeToggle />);
    expect(screen.getByRole('button', { name: /switch to/i })).toBeInTheDocument();
  });

  it('DarkModeToggle persists state to localStorage', () => {
    render(<DarkModeToggle />);
    const stateKey = window.localStorage.getItem('DARK_MODE_KEY');
    expect(stateKey).not.toBeNull();
    if (stateKey !== null) {
      const state = JSON.parse(stateKey);
      expect(typeof state).toBe('boolean');
    }
  });

  it('DarkModeToggle button has accessible label', () => {
    render(<DarkModeToggle />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
  });
});