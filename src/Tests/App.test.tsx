import { describe, expect, it, vi } from 'vitest';
import { App } from '../App';
import { render, screen, userEvent } from '../Utilities/test-utils';

describe('App', () => {
  it('is rendered', () => {
    render(<App />);
  })
  it('is rendered with title', () => {
    render(<App />);
    expect(screen.getByText(/Alexander Beesley/i)).toBeInTheDocument();
  })
})

// mock images
vi.mock('../Images/SwaggerExample.png', () => ({
  default: new Proxy(new Object(), {
    get(_, img1) {
      return img1;
    },
  }),
}))

vi.mock('../Images/LogOutput.PNG', () => ({
  default: new Proxy(new Object(), {
    get(_, img2) {
      return img2;
    },
  }),
}))

vi.mock('../Images/MVC.PNG', () => ({
  default: new Proxy(new Object(), {
    get(_, img3) {
      return img3;
    },
  }),
}))

vi.mock('../Images/PayCaltests.PNG', () => ({
  default: new Proxy(new Object(), {
    get(_, img4) {
      return img4;
    },
  }),
}))