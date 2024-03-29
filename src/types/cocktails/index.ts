import * as t from 'io-ts'

const optional = <T extends t.Mixed>(type: T) =>
  t.union([type, t.undefined, t.null])

export const cocktail = t.type({
  idDrink: t.string,
  strDrink: t.string,
  strDrinkThumb: t.string,
  strDrinkAlternate: optional(t.string),
  strTags: optional(t.string),
  strVideo: optional(t.string),
  strCategory: optional(t.string),
  strIBA: optional(t.string),
  strAlcoholic: optional(t.string),
  strGlass: optional(t.string),
  strInstructions: optional(t.string),
  strInstructionsES: optional(t.string),
  strInstructionsDE: optional(t.string),
  strInstructionsFR: optional(t.string),
  strInstructionsIT: optional(t.string),
  strIngredient1: optional(t.string),
  strIngredient2: optional(t.string),
  strIngredient3: optional(t.string),
  strIngredient4: optional(t.string),
  strIngredient5: optional(t.string),
  strIngredient6: optional(t.string),
  strIngredient7: optional(t.string),
  strIngredient8: optional(t.string),
  strIngredient9: optional(t.string),
  strIngredient10: optional(t.string),
  strIngredient11: optional(t.string),
  strIngredient12: optional(t.string),
  strIngredient13: optional(t.string),
  strIngredient14: optional(t.string),
  strIngredient15: optional(t.string),
  strMeasure1: optional(t.string),
  strMeasure2: optional(t.string),
  strMeasure3: optional(t.string),
  strMeasure4: optional(t.string),
  strMeasure5: optional(t.string),
  strMeasure6: optional(t.string),
  strMeasure7: optional(t.string),
  strMeasure8: optional(t.string),
  strMeasure9: optional(t.string),
  strMeasure10: optional(t.string),
  strMeasure11: optional(t.string),
  strMeasure12: optional(t.string),
  strMeasure13: optional(t.string),
  strMeasure14: optional(t.string),
  strMeasure15: optional(t.string),
  strImageSource: optional(t.string),
  strImageAttribution: optional(t.string),
  strCreativeCommonsConfirmed: optional(t.string),
  dateModified: optional(t.string),
})

export const cocktails = t.array(cocktail)

export type Cocktail = t.TypeOf<typeof cocktail>
export type Cocktails = t.TypeOf<typeof cocktails>
