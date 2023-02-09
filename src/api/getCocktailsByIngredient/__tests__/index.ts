import { getCocktailsByIngredient } from '..'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('getCocktailsByIngredient', () => {
  it('returns the drinks object when api call is successful', async () => {

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ drinks: [] }),
      }),
    ) as jest.Mock

    const result = await getCocktailsByIngredient('vodka')

    expect(global.fetch).toHaveBeenCalled()
    expect(result).toMatchObject({ drinks: [] })
  })

  it('returns null when there is an error', async () => {

    global.fetch = jest.fn(() =>
      Promise.reject()
    ) as jest.Mock

    const result = await getCocktailsByIngredient('vodka')

    expect(global.fetch).toHaveBeenCalled()
    expect(result).toBe(null)
  })

})
