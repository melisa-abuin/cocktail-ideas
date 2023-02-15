import * as t from 'io-ts'

export const ingredient = t.type({
  idIngredient: t.string,
  strABV: t.union([t.string, t.null]),
  strAlcohol: t.string,
  strDescription: t.string,
  strIngredient: t.string,
  strType: t.string,
})

export const ingredients = t.array(ingredient)

export type Ingredient = t.TypeOf<typeof ingredient>
export type Ingredients = t.TypeOf<typeof ingredients>
