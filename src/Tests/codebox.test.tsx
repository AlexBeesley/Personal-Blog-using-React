import { describe, expect, it, vi } from 'vitest'
import { render, screen, userEvent } from '../Utilities/test-utils'
import CodeBox from '../Components/codebox'

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
      <CodeBox language={'javascript'}>{'console.log("test")'}</CodeBox>
    )
    expect(
      container.querySelector('[aria-label="Code example in javascript"]')
    ).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
  })

  it('copies the code to the clipboard', async () => {
    const user = userEvent.setup()
    const writeText = vi
      .spyOn(navigator.clipboard, 'writeText')
      .mockResolvedValue(undefined)
    render(<CodeBox language={'yaml'}>{'\ntrigger:\n- develop\n'}</CodeBox>)
    await user.click(screen.getByRole('button', { name: 'Copy code' }))
    expect(writeText).toHaveBeenCalledWith('trigger:\n- develop')
    expect(await screen.findByText('Copied')).toBeInTheDocument()
  })
})
