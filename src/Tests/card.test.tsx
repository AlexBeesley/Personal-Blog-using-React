import { describe, expect, it } from 'vitest'
import { render, screen } from '../Utilities/test-utils'
import Card from '../Components/card'

describe('Card', () => {
  it('Card is rendered with title and children', () => {
    render(
      <Card title={'test'}>
        <p>children</p>
      </Card>
    )
    expect(screen.getByText(/test/i)).toBeInTheDocument()
    expect(screen.getByText(/children/i)).toBeInTheDocument()
  })

  it('Card renders as blogpost when blogpost prop is true', () => {
    render(
      <Card title={'blog title'} blogpost={true}>
        <p>blog content</p>
      </Card>
    )
    expect(screen.getByText(/blog title/i)).toBeInTheDocument()
    expect(screen.getByText(/blog content/i)).toBeInTheDocument()
  })

  it('anchors a blogpost section by its title', () => {
    render(
      <Card title={'Testing with NUnit and Moq'} blogpost={true}>
        <p>content</p>
      </Card>
    )
    const section = screen.getByRole('region', {
      name: 'Testing with NUnit and Moq',
    })
    expect(section).toHaveAttribute('id', 'testing-with-nunit-and-moq')
  })
})
