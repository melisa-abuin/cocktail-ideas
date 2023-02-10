
import { Column } from '..'
import { render } from '@testing-library/react'

describe('Column', () => {
  it('renders a component with a 100% max width if no limit has ben specified', () => {
    const { container } = render(<Column />)

    expect(container.firstChild).toHaveStyle({ 'max-width': 'none' })
  })

  it('renders a component with the specified max width', () => {
    const { container } = render(<Column width={300} />)

    expect(container.firstChild).toHaveStyle({ 'max-width': '300px' })
  })
})