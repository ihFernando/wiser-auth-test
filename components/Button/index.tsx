import React from 'react'

import { Button as StyledButton } from './styled'

import { IButton } from './types'

const Button = ({ children, isBold, modifier, ...props }: IButton) => (
  <StyledButton isBold={isBold} modifier={modifier} {...props}>
    {children}
  </StyledButton>
)

Button.displayName = 'Button'

Button.defaultProps = {
  isBold: true,
  modifier: 'primary'
}

export default Button
