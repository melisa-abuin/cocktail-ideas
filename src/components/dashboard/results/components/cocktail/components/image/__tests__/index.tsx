import { Image } from '..'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ComponentProps } from 'react'

const defaultProps = {
  onClick: jest.fn(),
  strDrink: 'vodka',
  strDrinkThumb: 'image',
}

const mount = ({
  onClick,
  strDrink,
  strDrinkThumb,
}: ComponentProps<typeof Image> = defaultProps) => {
  return render(
    <Image
      onClick={onClick}
      strDrink={strDrink}
      strDrinkThumb={strDrinkThumb}
    />
  )
}

describe('Image', () => {
  it('renders an image', () => {
    mount()

    expect(screen.getByAltText('drink')).toBeInTheDocument()
  })

  it('renders a text with the name of the drink', () => {
    mount()

    expect(screen.queryByText('vodka')).toBeInTheDocument()
  })

  it('calls on click function correctly', async () => {
    const onClick = jest.fn()
    mount({ ...defaultProps, onClick })

    userEvent.click(screen.getByAltText('drink'))

    await waitFor(() => {
      expect(onClick).toHaveBeenCalled()
    })
  })
})
