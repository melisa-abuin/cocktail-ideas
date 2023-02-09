import { pipe } from "fp-ts/function"
import * as TE from "fp-ts/TaskEither"
import * as E from "fp-ts/Either"
import { handleApiError } from "@/src/utils/handleApiError"
import { apiBaseUrl } from "@/src/constants/api"

const apiUrl = "/filter.php"

export const getCocktailsByIngredient = async (name: string) => {
  const result = await pipe(
    TE.tryCatch(
      () => fetch(`${apiBaseUrl}${apiUrl}?i=${name}`),
      handleApiError,
    ),
    TE.chain(response => TE.tryCatch(
      () => response.json(),
      handleApiError,
    )),
  )()

  if(E.isRight(result)){
    return result.right
  }

  return null
}