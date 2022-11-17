import { call, put, takeLatest, delay, select } from 'redux-saga/effects'
import Router from 'next/router'

import { AuthActions, TAuthResponse } from '@wiser/types/Auth'
import { ApplicationState } from '@wiser/types/Store'
import { fetchAuthentication } from '@wiser/endpoints/auth'
import { setLocalStorage } from '@wiser/utils/localStorage'
import { CACHE } from '@wiser/core/constants'

import { authRequestSuccess, authRequestFailure } from '../actions'

function cacheUserSession(userId: string, token: string) {
  setLocalStorage(userId, token)
}

function* fetchAuth(data) {
  const { payload } = data

  const userId = yield select(
    (state: ApplicationState) => state.auth.data?.userId
  )

  let currentUserId = userId

  try {
    if (!userId) {
      const { data }: TAuthResponse = yield call(fetchAuthentication, payload)
      const { userId, token } = data

      cacheUserSession(CACHE.SESSION, token)
      currentUserId = userId
    }

    yield put(authRequestSuccess(currentUserId))

    Router.push('/entrar')
  } catch (error) {
    yield delay(2000)

    yield put(authRequestFailure())
    // Enviar para o Sentry/Dynatrace
  }
}

export default function* AuthSagas() {
  yield takeLatest(AuthActions.AUTH_REQUEST, fetchAuth)
}
