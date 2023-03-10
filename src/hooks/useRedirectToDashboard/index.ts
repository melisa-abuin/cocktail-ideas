import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useRedirectToDashboard = () => {
  const { push } = useRouter()

  return useCallback(
    (ingredient: string) =>
      push({
        pathname: '/dashboard/[ingredient]',
        query: {
          ingredient,
        },
      }),
    [push]
  )
}
