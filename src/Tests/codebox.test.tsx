import { describe, expect, it } from 'vitest';
import { render, screen } from '../Utilities/test-utils';
import CodeBox from '../Components/codebox';

describe('Codebox', () => {
  render(
    <CodeBox
      language={'csharp'}
      children={'Console.Writeline("Hello World!")'}
    />
  )

  it('CodeBox is rendered', () => {
    expect(screen.getByText(/Hello World!/i)).toBeInTheDocument()
  })
})