import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Login from '.'

export default {
  title: 'Screens/Login',
  component: Login,
  decorators: [withKnobs]
}

export const Default: React.FC = () => <Login />
