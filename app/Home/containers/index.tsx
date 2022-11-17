import React, { useCallback } from 'react'
import Router from 'next/router'

import Home from '@wiser/components/screens/Home'
import { removeLocalStorage } from '@wiser/utils/localStorage'
import { CACHE } from '@wiser/core/constants'

const HomeContainer = () => {
  const onLoggout = useCallback(() => {
    removeLocalStorage(CACHE.SESSION)
    Router.push('/entrar')
  }, [])

  return <Home onLoggout={onLoggout} />
}

export default HomeContainer
