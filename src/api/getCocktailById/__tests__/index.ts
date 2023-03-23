import { getCocktailById } from '..'
import { mockedCocktail } from '@/src/mocks/cocktails'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('getCocktailById', () => {
  it('returns the drinks object when api call is successful', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ drinks: [mockedCocktail] }),
      })
    ) as jest.Mock

    const result = await getCocktailById('1')

    expect(global.fetch).toHaveBeenCalled()
    expect(result).toMatchObject([mockedCocktail])
  })

  it('returns null when there is an error', async () => {
    global.fetch = jest.fn(() => Promise.reject()) as jest.Mock

    const result = await getCocktailById('1')

    expect(global.fetch).toHaveBeenCalled()
    expect(result).toBe(null)
  })
})
