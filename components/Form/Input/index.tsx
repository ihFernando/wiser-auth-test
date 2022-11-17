import React from 'react'

import Typography from '@wiser/components/Typography'

import { IInput } from './types'

import { Fieldset, Input as StyledInput, Error, IconError } from './styled'

const Input = ({
  type,
  fieldName,
  placeholder,
  isRequired,
  hasError,
  errorMessage,
  ...props
}: IInput) => {
  return (
    <Fieldset>
      <StyledInput
        type={type}
        name={fieldName}
        placeholder={placeholder}
        hasError={hasError}
        required={isRequired}
        {...props}
      />
      <Error show={hasError}>
        <Typography size="body-p" color="alert">
          {errorMessage}
        </Typography>
      </Error>
      <IconError show={hasError} />
    </Fieldset>
  )
}

Input.displayName = 'Input'

Input.defaultProps = {
  type: 'text',
  isRequired: false,
  hasError: false,
  errorMessage: 'Verifique os dados do campo.'
}

export default Input
