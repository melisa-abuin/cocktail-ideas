import { getIngredientsByName } from '..'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('getIngredientsByName', () => {
  it('returns the ingredients object when api call is successful', async () => {
    const mockedIngredients = [
      {
        idIngredient: '312',
        strABV: null,
        strAlcohol: 'No',
        strDescription: 'some description',
        strIngredient: 'Lime',
        strType: 'Fruit',
      },
    ]

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
