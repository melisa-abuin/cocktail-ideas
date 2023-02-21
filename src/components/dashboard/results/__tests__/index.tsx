import { Results } from '..'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useCocktails } from '@/src/hooks/useCocktails'

jest.mock('@/src/hooks/useCocktails')

afterEach(() => {
  jest.resetAllMocks()
})

type Props = {
  ingredient: string
}

const cocktailsMock = [
  {
    idDrink: '1',
    strDrink: 'mojito',
    strDrinkThumb: 'https://drink-image.jpg',
  },
]

const queryClient = new QueryClient()

const mountRender = ({ ingredient = 'vodka' }: Partial<Props>) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Results ingredient={ingredient} />
    </QueryClientProvider>
  )
}

describe('Results', () => {
  it('renders the title correctly', () => {
    jest.mocked(useCocktails as jest.Mock<any>).mockReturnValueOnce({
      data: cocktailsMock,
      isFetching: false,
      error: null,
    })

    mountRender({ ingredient: 'gin' })

    expect(
      screen.getByText('Cocktails that you can prepare with "gin":')
    ).toBeInTheDocument()
  })

  it('renders a loader if the query is loading', () => {
    jest.mocked(useCocktails as jest.Mock<any>).mockReturnValueOnce({
      data: null,
      isFetching: true,
      error: null,
    })

    mountRender({ ingredient: 'gin' })

    expect(screen.getByAltText('loader')).toBeInTheDocument()
  })

  it('renders an error message if the query failed', () => {
    jest.mocked(useCocktails as jest.Mock<any>).mockReturnValueOnce({
      data: null,
      isFetching: false,
      error: () => {},
    })

    mountRender({ ingredient: 'gin' })

    expect(
      screen.getByText('Ups, something went wrong! Try again please.')
    ).toBeInTheDocument()
  })

  it('renders the cocktails when the api call is successful', () => {
    jest.mocked(useCocktails as jest.Mock<any>).mockReturnValueOnce({
      data: cocktailsMock,
      isFetching: false,
      error: null,
    })

    mountRender({ ingredient: 'gin' })

    expect(screen.getByText('mojito')).toBeInTheDocument()
  })
})
