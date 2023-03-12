import { getIngredientsByName } from '..'
import { mockedIngredients } from '@/src/mocks/ingredients'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('getIngredientsByName', () => {
  it('returns the ingredients object when api call is successful', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ ingredients: mockedIngredients }),
      })
    ) as jest.Mock

    const result = await getIngredientsByName('vodka')

    expect(global.fetch).toHaveBeenCalled()
    expect(result).toMatchObject(mockedIngredients)
  })

  it('returns null when there is an error', async () => {
    global.fetch = jest.fn(() => Promise.reject()) as jest.Mock

    const result = await getIngredientsByName('vodka')

    expect(global.fetch).toHaveBeenCalled()
    expect(result).toBe(null)
  })
})
