import { Header } from '..'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('renders elements correctly', () => {
    render(<Header />)

    expect(screen.getByText('Cocktails')).toBeInTheDocument()

    expect(screen.getByAltText('banner')).toBeInTheDocument()

    expect(
      screen.getByText(
        `Do you have drinks at home but don't know what to prepare? Tell us which ones and we will find the cocktail for you`
      )
    ).toBeInTheDocument()
  })
})
