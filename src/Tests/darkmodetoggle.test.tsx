import { describe, expect, it } from 'vitest';
import { render } from '../Utilities/test-utils';
import DarkModeToggle from '../Components/darkmodetoggle';

describe('DarkModeToggle', () => {
  it('DarkModeToggle is rendered', () => {
    render(<DarkModeToggle/>);
  });

  it('DarkModeToggle state is type boolean', () => {
    const stateKey = window.localStorage.getItem('DARK_MODE_KEY')
    if (stateKey !== null) {
        let state = JSON.parse(stateKey);
        expect(state).toBeTypeOf("boolean");
      }
  });

  it('Dark Mode Key is false by default', () => {
    const stateKey = window.localStorage.getItem('DARK_MODE_KEY')
    if (stateKey !== null) {
        let state = JSON.parse(stateKey);
        expect(state).toBe(false);
      }
  });

  it('Dark Mode Key is inverted on setToggle', () => {
    let state_init;
    let state_after;
    const stateKey_init = window.localStorage.getItem('DARK_MODE_KEY')
    if (stateKey_init !== null) {
        state_init = JSON.parse(stateKey_init);
        window.localStorage.setItem('DARK_MODE_KEY', (!state_init).toString())
    }

    const stateKey_after = window.localStorage.getItem('DARK_MODE_KEY')
    if (stateKey_after !== null) {
        state_after = JSON.parse(stateKey_after);
    }

    expect(state_after !== state_init)
  });
})