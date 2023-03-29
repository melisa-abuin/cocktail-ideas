import { QueryClient, QueryClientProvider } from 'react-query'
import { useCocktailById } from '..'
import { renderHook, waitFor } from '@testing-library/react'
import { ReactNode } from 'react'
import { getCocktailById } from '@/src/api/getCocktailById'
import { mockedCocktail } from '@/src/mocks/cocktails'

jest.mock('@/src/api/getCocktailById')

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

type Props = {
  children: ReactNode
}

const wrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useCocktailById', () => {
  it('returns success when the api call is successful', async () => {
    jest
      .mocked(getCocktailById as jest.Mock)
      .mockReturnValueOnce(Promise.resolve([mockedCocktail]))

    const { result } = renderHook(() => useCocktailById('1'), {
      wrapper,
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual(mockedCocktail)
  })

  it('returns an error when the api call is rejected', async () => {
    jest.mocked(getCocktailById).mockReturnValueOnce(Promise.resolve(null))

    const { result } = renderHook(() => useCocktailById('1'), {
      wrapper,
    })

    await waitFor(() => expect(result.current.isFetched).toBe(true))

    expect(result.current.data).toEqual(null)
  })
})
