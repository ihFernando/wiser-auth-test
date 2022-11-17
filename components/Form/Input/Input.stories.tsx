import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Input from '.'

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [withKnobs]
}

export const Default: React.FC = () => (
  <>
    <Input fieldName="stories" placeholder={text('Placeholder', 'Input')} />
    <Input
      fieldName="password"
      type="password"
      placeholder={text('Placeholder', 'Senha')}
    />
  </>
)

export const WithError: React.FC = () => (
  <Input
    fieldName="stories"
    placeholder={text('Placeholder', 'Input')}
    hasError={boolean('hasError', true)}
    errorMessage={text('ErrorMessage', 'Digite um e-mail válido')}
  />
)
