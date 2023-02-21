import { QueryClient, QueryClientProvider } from 'react-query'
import { useCocktails } from '..'
import { renderHook } from '@testing-library/react-hooks'
import { ReactNode } from 'react'
import { getCocktailsByIngredient } from '@/src/api/getCocktailsByIngredient'

jest.mock('@/src/api/getCocktailsByIngredient')

afterEach(() => {
  jest.restoreAllMocks()
})

const cocktailsMock = [
  {
    idDrink: '1',
    strDrink: 'mojito',
    strDrinkThumb: 'https://drink-image.jpg',
  },
]

const queryClient = new QueryClient()

type Props = {
  children: ReactNode
}

const wrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useCocktails', () => {
  it('returns success when the api call is successful', async () => {
    jest
      .mocked(getCocktailsByIngredient)
      .mockReturnValueOnce(Promise.resolve(cocktailsMock))

    const { result, waitFor } = renderHook(() => useCocktails('vodka'), {
      wrapper,
    })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toEqual(cocktailsMock)
  })

  it('returns an error when the api call is rejected', async () => {
    jest
      .mocked(getCocktailsByIngredient)
      .mockReturnValueOnce(Promise.resolve(null))

    const { result, waitFor } = renderHook(() => useCocktails('vodka'), {
      wrapper,
    })

    await waitFor(() => result.current.isFetched)

    expect(result.current.data).toEqual(null)
  })
})
