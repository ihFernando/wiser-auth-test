import React, { useState, memo, FormEvent } from 'react'

import Button from '@wiser/components/Button'
import Typography from '@wiser/components/Typography'
import { Wrap } from '@wiser/components/Wrap'
import Alert from '@wiser/components/Alert'
import { onValidateEmail } from '@wiser/utils'

import InputEmail from './InputEmail'
import InputPassword from './InputPassword'

import { Row, WrapButton, RecoverAccount } from './styled'

interface Props {
  error: boolean
  onSubmit: ({}) => void
}

const LoginForm: React.FC<any> = ({ error, onSubmit }: Props) => {
  const [hasEmailError, setHasEmailError] = useState(false)
  const [hasPasswordError, setHasPasswordError] = useState(false)

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const { email, password } = evt?.currentTarget
    const isValidEmail = Boolean(
      email && email.value && onValidateEmail(email.value)
    )
    const isValidPassword = Boolean(password && password.value.length > 0)

    if (isValidEmail && isValidPassword) {
      setHasEmailError(false)
      setHasPasswordError(false)
      onSubmit({ email: email.value, password: password.value })
    } else {
      setHasEmailError(!isValidEmail)
      setHasPasswordError(!isValidPassword)
    }
  }

  return (
    <>
      <Typography
        size="title-m"
        sizeLargeDisplay="title-g"
        color="dark"
        pb={1}
        align="center"
        alignLargeDisplay="left"
      >
        Olá, seja <br />
        bem-vindo!
      </Typography>

      <Typography
        size="body-p"
        sizeLargeDisplay="body-m"
        color="light"
        isBold
        pb={3}
        align="center"
      >
        Para acessar a plataforma, faça seu login.
      </Typography>

      <If condition={error}>
        <Alert text="Erro ao autenticar. Tente novamente." />
      </If>

      <form onSubmit={evt => handleSubmit(evt)}>
        <Wrap mb={1}>
          <InputEmail hasError={hasEmailError} />
        </Wrap>
        <Wrap mb={1.5}>
          <InputPassword hasError={hasPasswordError} />
        </Wrap>

        <Row>
          <WrapButton>
            <Button type="submit">Entrar</Button>
          </WrapButton>

          <RecoverAccount size="body-p" color="light-high" align="center">
            Esqueceu seu login ou senha??
            <br />
            Clique{' '}
            <a href="#">
              <u>aqui</u>
            </a>
          </RecoverAccount>
        </Row>
      </form>
    </>
  )
}

const MemoizedLoginForm = memo(LoginForm)

MemoizedLoginForm.displayName = 'LoginForm'

export default MemoizedLoginForm
