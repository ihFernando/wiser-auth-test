import React from 'react'

import Typography from '@wiser/components/Typography'

import { Alert as StyledAlert } from './styled'

interface Props {
  text: string
}

const Alert = ({ text }: Props) => {
  return (
    <StyledAlert>
      <Typography size="body-p" color="alert" isBold align="center">
        {text}
      </Typography>
    </StyledAlert>
  )
}

export default Alert
