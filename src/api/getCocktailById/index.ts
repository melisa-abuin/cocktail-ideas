import { pipe } from 'fp-ts/function'
import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import { handleApiError } from '@/src/utils/handleApiError'
import { apiBaseUrl } from '@/src/constants/api'
import { cocktails } from '@/src/types/cocktails'
import { decodeWith } from '@/src/utils/decodeWith'

const apiUrl = 'lookup.php'

export const getCocktailById = async (id: string) => {
  const result = await pipe(
    TE.tryCatch(() => fetch(`${apiBaseUrl}${apiUrl}?i=${id}`), handleApiError),
    TE.chain((response) => TE.tryCatch(() => response.json(), handleApiError)),
    TE.chain((response) => decodeWith(cocktails)(response.drinks))
  )()
  console.log(result)
  if (E.isRight(result)) {
    return result.right
  }

  return null
}
