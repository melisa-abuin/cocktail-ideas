import { render, screen } from '@testing-library/react'
import { ErrorMessage } from '..'

describe('ErrorMessage', () => {
  it('renders the correct message', () => {
    render(<ErrorMessage />)

    expect(
      screen.getByText('Ups, something went wrong! Try again please.')
    ).toBeInTheDocument()
  })
})
