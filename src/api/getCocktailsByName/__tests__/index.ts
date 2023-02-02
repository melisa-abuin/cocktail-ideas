import { getCocktailsByName } from '..'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('getCocktailsByName', () => {
  it('returns the drinks object when api call is successful', async () => {

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ drinks: [] }),
      }),
    ) as jest.Mock

    const result = await getCocktailsByName('vodka')

    expect(global.fetch).toHaveBeenCalled()
    expect(result).toMatchObject({ drinks: [] })
  })

  it.todo('returns null when there is an error')

})
