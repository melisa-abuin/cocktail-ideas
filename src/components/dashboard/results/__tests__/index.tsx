import { Results } from '..'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useCocktailsByIngredient } from '@/src/hooks/useCocktailsByIngredient'
import { mockedCocktails } from '@/src/mocks/cocktails'
import { ComponentProps } from 'react'

jest.mock('@/src/hooks/useCocktailsByIngredient')

afterEach(() => {
  jest.resetAllMocks()
})

const queryClient = new QueryClient()

const mountRender = (
  { ingredient }: ComponentProps<typeof Results> = { ingredient: 'vodka' }
) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Results ingredient={ingredient} />
    </QueryClientProvider>
  )
}

describe('Results', () => {
  it('renders the title correctly', () => {
    jest
      .mocked(useCocktailsByIngredient as jest.Mock<any>)
      .mockReturnValueOnce({
        data: mockedCocktails,
        isFetching: false,
        error: null,
      })

    mountRender({ ingredient: 'gin' })

    expect(screen.getByText('gin')).toBeInTheDocument()
  })

  it('renders a loader if the query is loading', () => {
    jest
      .mocked(useCocktailsByIngredient as jest.Mock<any>)
      .mockReturnValueOnce({
        data: null,
        isFetching: true,
        error: null,
      })

    mountRender()

    expect(screen.getByAltText('loader')).toBeInTheDocument()
  })

  it('renders an error message if the query failed', () => {
    jest
      .mocked(useCocktailsByIngredient as jest.Mock<any>)
      .mockReturnValueOnce({
        data: null,
        isFetching: false,
        error: () => {},
      })

    mountRender()

    expect(
      screen.getByText('Ups, something went wrong! Try again please.')
    ).toBeInTheDocument()
  })

  it('renders the cocktails when the api call is successful', () => {
    jest
      .mocked(useCocktailsByIngredient as jest.Mock<any>)
      .mockReturnValueOnce({
        data: mockedCocktails,
        isFetching: false,
        error: null,
      })

    mountRender({ ingredient: 'gin' })

    expect(screen.getByText('drink name')).toBeInTheDocument()
  })
})
