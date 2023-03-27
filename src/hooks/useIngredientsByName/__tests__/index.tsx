import { QueryClient, QueryClientProvider } from 'react-query'
import { useIngredientsByName } from '..'
import { renderHook, waitFor } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import { getIngredientsByName } from '@/src/api/getIngredientsByName'
import { mockedIngredients } from '@/src/mocks/ingredients'

jest.mock('@/src/api/getIngredientsByName')

afterEach(() => {
  jest.resetAllMocks()
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

describe('useIngredientsByName', () => {
  it('returns success when the api call is successful', async () => {
    jest
      .mocked(getIngredientsByName)
      .mockReturnValueOnce(Promise.resolve(mockedIngredients))

    const { result } = renderHook(
      () => useIngredientsByName({ name: 'vodka', enabled: true }),
      {
        wrapper,
      }
    )

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual(mockedIngredients)
  })

  it('returns an error when the api call is rejected', async () => {
    jest.mocked(getIngredientsByName).mockReturnValueOnce(Promise.reject())

    const { result } = renderHook(
      () => useIngredientsByName({ name: 'vodka', enabled: true }),
      {
        wrapper,
      }
    )
    await waitFor(() => expect(result.current.isSuccess).toBe(false))

    expect(result.current.data).toEqual(undefined)
  })

  it('does not call the api if it is not enabled', async () => {
    jest.mocked(getIngredientsByName).mockReturnValueOnce(Promise.resolve(null))

    const { result } = renderHook(
      () => useIngredientsByName({ name: 'v', enabled: false }),
      {
        wrapper,
      }
    )

    await waitFor(() => expect(result.current.isFetched).toBe(false))
  })
})
