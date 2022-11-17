import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Button from '.'

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withKnobs]
}

export const Default = () => (
  <>
    <Button modifier="primary">Botão Primary</Button>
    <br />
    <br />
    <Button modifier="secondary">Botão Secondary</Button>
  </>
)
