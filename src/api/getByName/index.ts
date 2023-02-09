import { pipe } from "fp-ts/function"
import * as TE from "fp-ts/TaskEither"
import * as E from "fp-ts/Either"
import { handleApiError } from "@/src/utils/handleApiError"
import { apiUrlFormatter } from "@/src/utils/apiUrlFormatter"

type Props = {
  entity: 'cocktail' | 'ingredient'
  name: string
}

export const getByName = async ({entity, name}: Props) => {
  const result = await pipe(
    TE.tryCatch(
      () => fetch(apiUrlFormatter({ entity, param: name })),
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