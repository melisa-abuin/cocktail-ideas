import { SearchBox } from '..'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('SearchBox', () => {
  it('renders the searchbox input', () => {
    render(<SearchBox onChange={jest.fn()} />)

    expect(screen.getByPlaceholderText('Type ingredient')).toBeInTheDocument()
  })

  it('renders the default value when passed by props', () => {
    const value = 'some value'
    render(<SearchBox defaultValue={value} onChange={jest.fn()} />)

    expect(screen.getByPlaceholderText('Type ingredient')).toHaveValue(value)
  })

  it('returns the string value of the field on change', async () => {
    const onChange = jest.fn()
    render(<SearchBox onChange={onChange} />)

    const input = screen.getByPlaceholderText('Type ingredient')

    userEvent.type(input, 'some value')

    waitFor(() => {
      expect(onChange).toHaveBeenCalledWith('some value')
    })
  })
})
