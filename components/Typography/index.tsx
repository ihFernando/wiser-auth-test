import React from 'react'

import { ITypography } from './types'

import { Typography as StyledTypography } from './styled'

const Typography: React.FC<ITypography> = ({
  children,
  as,
  align,
  alignLargeDisplay,
  size,
  sizeLargeDisplay,
  pb,
  color,
  isBold,
  isUppercase
}: ITypography) => (
  <StyledTypography
    as={as}
    align={align}
    alignLargeDisplay={alignLargeDisplay}
    size={size}
    sizeLargeDisplay={sizeLargeDisplay}
    pb={pb}
    color={color}
    isBold={isBold}
    isUppercase={isUppercase}
  >
    {children}
  </StyledTypography>
)

Typography.displayName = 'Typography'

Typography.defaultProps = {
  as: 'p',
  align: 'left',
  alignLargeDisplay: null,
  size: 'body-m',
  sizeLargeDisplay: null,
  pb: null,
  color: 'dark-medium',
  isBold: false,
  isUppercase: false
}

export default Typography
