import React from 'react'

import Typography from '@wiser/components/Typography'
import Input from '@wiser/components/Form/Input'

interface Props {
  hasError: boolean
}

const InputPassword = ({ hasError }: Props) => {
  return (
    <>
      <label htmlFor="password">
        <Typography size="body-p" isUppercase>
          Senha
        </Typography>
      </label>
      <Input
        type="password"
        fieldName="password"
        placeholder="senha"
        hasError={hasError}
        errorMessage="Digite sua senha"
      />
    </>
  )
}

export default InputPassword
