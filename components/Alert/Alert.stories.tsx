import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Alert from '.'

export default {
  title: 'Components/Alert',
  component: Alert,
  decorators: [withKnobs]
}

export const Default = () => (
  <>
    <Alert text={text('Text', 'Erro ao concluir a ação.')} />
  </>
)
