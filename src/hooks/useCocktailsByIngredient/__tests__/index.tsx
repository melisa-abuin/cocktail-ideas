import { QueryClient, QueryClientProvider } from 'react-query'
import { useCocktailsByIngredient } from '..'
import { renderHook, waitFor } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import { getCocktailsByIngredient } from '@/src/api/getCocktailsByIngredient'
import { mockedCocktails } from '@/src/mocks/cocktails'

jest.mock('@/src/api/getCocktailsByIngredient')

afterEach(() => {
  jest.restoreAllMocks()
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      retry: false,
    },
  },
})

const wrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useCocktailsByIngredient', () => {
  it('returns success when the api call is successful', async () => {
    jest
      .mocked(getCocktailsByIngredient as jest.Mock)
      .mockReturnValueOnce(Promise.resolve(mockedCocktails))

    const { result } = renderHook(() => useCocktailsByIngredient('vodka'), {
      wrapper,
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual(mockedCocktails)
  })

  it('returns an error when the api call is rejected', async () => {
    jest
      .mocked(getCocktailsByIngredient)
      .mockReturnValueOnce(Promise.resolve(null))

    const { result } = renderHook(() => useCocktailsByIngredient('vodka'), {
      wrapper,
    })

    await waitFor(() => expect(result.current.isFetched).toBe(true))

    expect(result.current.data).toEqual(null)
  })
})
