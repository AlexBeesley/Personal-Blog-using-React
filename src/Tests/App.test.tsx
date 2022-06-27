import { describe, it, vi } from 'vitest';
import { render } from '../Utilities/test-utils';
import { App } from '../App';

describe('App', () => {
  it('is rendered', () => {
    render(<App />);
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

vi.mock('../Images/personalWebsite.PNG', () => ({
  default: new Proxy(new Object(), {
    get(_, img4) {
      return img4;
    },
  }),
}))

vi.mock('../Images/darkmode.PNG', () => ({
  default: new Proxy(new Object(), {
    get(_, img4) {
      return img4;
    },
  }),
}))