import { failure } from 'io-ts/lib/PathReporter'
import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import * as t from 'io-ts'
import { flow } from 'fp-ts/function'

export const decodeWith = <A>(decoder: t.Decoder<unknown, A>) =>
  flow(
    decoder.decode,
    E.mapLeft((errors) => new Error(failure(errors).join('\n'))),
    TE.fromEither
  )
