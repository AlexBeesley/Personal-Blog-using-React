import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '../Utilities/test-utils';
import CookieConsent from '../Components/CookieConsent';

describe('CookieConsent', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders cookie consent banner when not consented', () => {
    render(<CookieConsent />);
    expect(screen.getByText(/This website uses cookies/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Got it!/i })).toBeInTheDocument();
  });

  it('does not render banner when consent already given', () => {
    window.localStorage.setItem('COOKIE_KEY', JSON.stringify(true));
    const { container } = render(<CookieConsent />);
    expect(container.innerHTML).toBe('');
  });

  it('has correct ARIA attributes for dialog', () => {
    render(<CookieConsent />);
    const dialog = screen.getByRole('alertdialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-label', 'Cookie consent');
  });

  it('cookie image has alt text', () => {
    render(<CookieConsent />);
    expect(screen.getByAltText(/Cookie icon/i)).toBeInTheDocument();
  });
});
