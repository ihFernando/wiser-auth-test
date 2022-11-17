import { Reducer } from 'redux'
import { AuthState, AuthActions } from '@wiser/types/Auth'

const INITIAL_STATE: AuthState = {
  data: {
    userId: null,
    email: null,
    password: null,
    isLogged: false
  },
  loading: false,
  error: false
}

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActions.AUTH_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case AuthActions.AUTH_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          userId: action.payload,
          isLogged: true
        },
        loading: false,
        error: false
      }
    }
    case AuthActions.AUTH_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      }
    }
    default:
      return state
  }
}

export default reducer
