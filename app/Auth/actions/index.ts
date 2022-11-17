import { action } from 'typesafe-actions'
import { Auth, AuthActions } from '@wiser/types/Auth'

export const authRequest = (data: Auth) =>
  action(AuthActions.AUTH_REQUEST, data)
export const authRequestSuccess = (data: string) =>
  action(AuthActions.AUTH_SUCCESS, data)
export const authRequestFailure = () => action(AuthActions.AUTH_FAILURE)
