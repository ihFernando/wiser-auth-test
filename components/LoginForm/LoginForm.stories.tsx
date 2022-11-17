import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import LoginForm from '.'

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
  decorators: [withKnobs]
}

export const Default: React.FC = () => <LoginForm />
