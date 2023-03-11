import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useRedirectToHome = () => {
  const { push } = useRouter()

  return useCallback(
    () =>
      push({
        pathname: '/',
      }),
    [push]
  )
}
