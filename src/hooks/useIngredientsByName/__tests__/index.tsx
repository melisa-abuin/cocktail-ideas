import { QueryClient, QueryClientProvider } from 'react-query'
import { useIngredientsByName } from '..'
import { renderHook } from '@testing-library/react-hooks'
import { ReactNode } from 'react'
import { getIngredientsByName } from '@/src/api/getIngredientsByName'

jest.mock('@/src/api/getIngredientsByName')

afterEach(() => {
  jest.restoreAllMocks()
})

const ingredientsMock = [
  {
    idIngredient: '312',
    strABV: null,
    strAlcohol: 'No',
    strDescription: 'some description',
    strIngredient: 'Lime',
    strType: 'Fruit',
  },
]

const queryClient = new QueryClient()

type Props = {
  children: ReactNode
}

const wrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useIngredientsByName', () => {
  it('returns success when the api call is successful', async () => {
    jest
      .mocked(getIngredientsByName)
      .mockReturnValueOnce(Promise.resolve(ingredientsMock))

    const { result, waitFor } = renderHook(
      () => useIngredientsByName({ name: 'vodka', enabled: true }),
      {
        wrapper,
      }
    )

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toEqual(ingredientsMock)
  })

  it('returns an error when the api call is rejected', async () => {
    jest.mocked(getIngredientsByName).mockReturnValueOnce(Promise.resolve(null))

    const { result, waitFor } = renderHook(
      () => useIngredientsByName({ name: 'vodka', enabled: true }),
      {
        wrapper,
      }
    )

    await waitFor(() => result.current.isFetched)

    expect(result.current.data).toEqual(null)
  })

  it('does not call the api if it is not enabled', async () => {
    jest.mocked(getIngredientsByName).mockReturnValueOnce(Promise.resolve(null))

    const { result } = renderHook(
      () => useIngredientsByName({ name: 'v', enabled: false }),
      {
        wrapper,
      }
    )

    expect(result.current.isFetched).toEqual(false)
  })
})
