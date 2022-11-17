import React from 'react'

import Typography from '@wiser/components/Typography'
import Input from '@wiser/components/Form/Input'

interface Props {
  hasError: boolean
}

const InputEmail = ({ hasError }: Props) => {
  return (
    <>
      <label htmlFor="email">
        <Typography size="body-p" isUppercase>
          E-mail
        </Typography>
      </label>
      <Input
        type="email"
        fieldName="email"
        placeholder="user.name@mail.com"
        hasError={hasError}
        errorMessage="Digite um e-mail válido"
      />
    </>
  )
}

export default InputEmail
