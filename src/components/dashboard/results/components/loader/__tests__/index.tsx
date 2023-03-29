import { render, screen } from '@testing-library/react'
import { Loader } from '..'

describe('Loader', () => {
  it('renders the correct image', () => {
    render(<Loader />)

    expect(screen.getByAltText('loader')).toBeInTheDocument()
  })
})
