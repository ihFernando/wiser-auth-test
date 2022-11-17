import { addDecorator } from '@storybook/react'
import GlobalStyle from '../layout/globalStyle'

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
))
