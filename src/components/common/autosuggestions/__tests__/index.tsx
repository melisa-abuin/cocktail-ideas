import { AutoSuggestions } from '..'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from 'react-query'
import { getIngredientsByName } from '@/src/api/getIngredientsByName'

jest.mock('@/src/api/getIngredientsByName')

afterEach(() => {
  jest.resetAllMocks()
})

type Props = {
  onSelect: (value: string) => void
  size?: 'medium' | 'small'
}

const queryClient = new QueryClient()

const mountRender = ({ onSelect, size }: Props) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <AutoSuggestions onSelect={onSelect} size={size} />
    </QueryClientProvider>
  )
}

describe('AutoSuggestions', () => {
  it('show options when input changes value and it is longer than 1 character', async () => {
    jest.mocked(getIngredientsByName).mockReturnValueOnce(
      Promise.resolve([
        {
          idIngredient: '312',
          strABV: null,
          strAlcohol: 'No',
          strDescription: 'some description',
          strIngredient: 'Lime',
          strType: 'Fruit',
        },
      ])
    )

    mountRender({ onSelect: jest.fn() })

    const input = screen.getByPlaceholderText('Type ingredient')

    userEvent.type(input, 'Lim')

    await waitFor(() => {
      expect(screen.getByText('Lime')).toBeInTheDocument()
    })
  })

  it('does not show options when input changes value and it is longer than 1 character', async () => {
    mountRender({ onSelect: jest.fn() })

    const input = screen.getByPlaceholderText('Type ingredient')

    userEvent.type(input, 'L')

    await waitFor(() => {
      expect(screen.queryByText('Lime')).not.toBeInTheDocument()
    })
  })
})
