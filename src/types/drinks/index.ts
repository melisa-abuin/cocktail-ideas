import * as t from "io-ts"

export const drinks = t.array(
  t.type({
    idDrink: t.string,
    strDrink: t.string,
    strDrinkThumb: t.string
  })
)

export type Drinks = t.TypeOf<typeof drinks>
