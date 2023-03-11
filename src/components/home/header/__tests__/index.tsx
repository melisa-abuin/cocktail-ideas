import { Header } from '..'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('renders elements correctly', () => {
    render(<Header />)

    expect(screen.getByText('Cocktails')).toBeInTheDocument()

    expect(screen.getByAltText('banner')).toBeInTheDocument()
  })
})
