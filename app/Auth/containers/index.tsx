import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import * as AuthActions from '../actions'

import Login from '@wiser/components/screens/Login'
import Loader from '@wiser/components/Loader'

import { ApplicationState } from '@wiser/types/Store'
import { Auth } from '@wiser/types/Auth'

interface Props {
  auth: ApplicationState['auth']
  authRequest: (data: Auth) => void
}

const AuthContainer = ({ auth, authRequest }: Props) => {
  const handleSubmit = (fields: Auth) => authRequest(fields)

  return (
    <>
      <Login error={auth.error} onSubmit={handleSubmit} />

      <If condition={auth.loading}>
        <Loader />
      </If>
    </>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
