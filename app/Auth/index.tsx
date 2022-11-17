import React from 'react'

import { withSettingsDocument } from '@wiser/hocs'
import withAuth from '@wiser/hocs/withAuth'

import AuthContainer from './containers'

const Auth = () => <AuthContainer />

const pageWithSettings = withSettingsDocument({
  title: 'Entrar | Wiser Educação',
  description: 'Página de autenticação para plataforma da Wiser Educação'
})(Auth)

export default withAuth()(pageWithSettings)
