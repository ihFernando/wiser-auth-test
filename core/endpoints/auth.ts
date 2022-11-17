import api from './api'

import { Auth, TAuthResponse } from '@wiser/types/Auth'

export const fetchAuthentication = async (payload: Auth) => {
  const response = await api.post<TAuthResponse>(`/login`, { ...payload })

  return response.data
}
