import * as t from 'io-ts'

export const cocktail = t.type({
  idDrink: t.string,
  strDrink: t.string,
  strDrinkThumb: t.string,
})

export const cocktails = t.array(cocktail)

export type Cocktail = t.TypeOf<typeof cocktail>
export type Cocktails = t.TypeOf<typeof cocktails>
