import React, { memo } from 'react'

import LoginForm from '@wiser/components/LoginForm'

import { Content, Wrapper, Form } from './styled'

interface Props {
  error: boolean
  onSubmit: ({}) => void
}

const Login: React.FC<any> = ({ error, onSubmit }: Props) => {
  return (
    <div data-testid="screen-login">
      <Content>
        <Wrapper>
          <Form>
            <LoginForm error={error} onSubmit={onSubmit} />
          </Form>
        </Wrapper>
      </Content>
    </div>
  )
}

const MemoizedLogin = memo(Login)

MemoizedLogin.displayName = 'Login'

export default MemoizedLogin
