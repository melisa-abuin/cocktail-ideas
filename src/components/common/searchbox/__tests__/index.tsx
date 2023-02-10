
import { SearchBox } from '..'
import { render, screen } from '@testing-library/react'

describe('SearchBox', () => {
  it('renders the searchbox input', () => {
    render(<SearchBox />)

    expect(screen.getByPlaceholderText("Type ingredient")).toBeInTheDocument()
  })
})