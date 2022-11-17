import React from 'react'

import { withSettingsDocument } from '@wiser/hocs'
import withAuth from '@wiser/hocs/withAuth'

import HomeContainer from './containers'

const Home = () => <HomeContainer />

const pageWithSettings = withSettingsDocument({
  title: 'Área logada | Wiser Educação',
  description: 'Página príncipal Wiser Educação'
})(Home)

export default withAuth()(pageWithSettings)
