import { flow, pipe } from "fp-ts/function"
import * as TE from "fp-ts/TaskEither"
import * as E from "fp-ts/Either"
import { handleApiError } from "@/src/utils/handleApiError"
import { apiBaseUrl } from "@/src/constants/api"
import { drinks } from "@/src/types/drinks"
import * as t from "io-ts"
import { failure } from 'io-ts/lib/PathReporter'

const apiUrl = "/filter.php"

const decodeWith = <A>(decoder: t.Decoder<unknown, A>) =>
  flow(
    decoder.decode,
    E.mapLeft(errors => new Error(failure(errors).join('\n'))),
    TE.fromEither
  )

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
    TE.chain(response => decodeWith(drinks)(response.drinks))
  )()

  if(E.isRight(result)){
    return result.right
  }

  return null
}