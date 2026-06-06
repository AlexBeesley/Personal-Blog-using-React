import { describe, expect, it } from 'vitest';
import { render, screen } from '../Utilities/test-utils';
import CodeBox from '../Components/codebox';

describe('Codebox', () => {
  it('CodeBox is rendered with content', () => {
    render(
      <CodeBox language={'csharp'}>
        {'Console.Writeline("Hello World!")'}
      </CodeBox>
    )
    expect(screen.getByText(/Hello World!/i)).toBeInTheDocument()
  })

  it('CodeBox has correct aria-label for language', () => {
    const { container } = render(
      <CodeBox language={'javascript'}>
        {'console.log("test")'}
      </CodeBox>
    )
    expect(container.querySelector('[aria-label="Code example in javascript"]')).toBeInTheDocument()
  })
})