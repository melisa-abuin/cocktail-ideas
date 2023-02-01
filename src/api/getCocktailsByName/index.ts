import { pipe } from "fp-ts/function"
import * as TE from "fp-ts/TaskEither"
import * as E from "fp-ts/Either"

const handleApiError = (reason: unknown) => new Error(`${reason}`)

const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php"

export const getCocktailsByName = async (name: string) => {
  const result = await pipe(
    TE.tryCatch(
      (): Promise<any> => fetch(`${apiUrl}?s=${name}`),
      handleApiError,
    ),
    TE.chain(response => TE.tryCatch(
      (): Promise<any> => response.json(),
      handleApiError,
    )),
  )()

  if(E.isRight(result)){
    return result.right
  }

  return null
}