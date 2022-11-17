import React, { useEffect } from 'react'
import Router from 'next/router'

import { NextPage } from 'next'

import { getLocalStorage } from '@wiser/utils/localStorage'
import { CACHE } from '@wiser/core/constants'

function withAuth<P extends object>() {
  return (Component: NextPage<P>) => {
    const displayName = Component.displayName || Component.name || 'Component'

    function ComponentWithAuth(props: P) {
      const isBrowser = !!process.browser

      const userLogged = isBrowser && getLocalStorage(CACHE.SESSION)

      useEffect(() => {
        if (userLogged) {
          Router.push('/area-logada')
        } else {
          Router.push('/entrar')
        }
      }, [userLogged])

      return <Component {...props} />
    }

    ComponentWithAuth.displayName = `withAuth(${displayName})`

    return ComponentWithAuth
  }
}

export default withAuth
