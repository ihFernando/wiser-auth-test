import { APIResponse } from '@wiser/types/Response'

export type TAuthActions = {
  AUTH_REQUEST: '@auth/AUTH_REQUEST'
  AUTH_SUCCESS: '@auth/AUTH_SUCCESS'
  AUTH_FAILURE: '@auth/AUTH_FAILURE'
}

export enum AuthActions {
  AUTH_REQUEST = '@auth/AUTH_REQUEST',
  AUTH_SUCCESS = '@auth/AUTH_SUCCESS',
  AUTH_FAILURE = '@auth/AUTH_FAILURE'
}

export type Auth = {
  userId: string
  email?: string
  password?: string
  isLogged?: boolean
}

export type TAuthForm = {
  payload: Auth
}

export type TAuthResponse = APIResponse<{
  id: number
  token: string
  userId: string
}>

export interface AuthState {
  readonly data: Auth
  readonly loading: boolean
  readonly error: boolean
}
