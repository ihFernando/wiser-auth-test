import React, { memo } from 'react'

import Typography from '@wiser/components/Typography'
import Button from '@wiser/components/Button'

import { Content, Wrapper } from './styled'

interface Props {
  onLoggout: () => void
}

const Home: React.FC<any> = ({ onLoggout }: Props) => {
  return (
    <Content data-test="screen-home">
      <Wrapper>
        <Typography
          size="body-g"
          sizeLargeDisplay="title-p"
          pb={1}
          align="left"
          isBold
        >
          Área logada
        </Typography>
        <Typography
          size="body-m"
          sizeLargeDisplay="body-m"
          pb={3}
          align="left"
          color="dark-medium"
        >
          A ideia era simular a implementação da autentição, optei por utilizar
          o LocalStorage para simplificar a ideia.
        </Typography>
        <Button onClick={onLoggout}>Deslogar</Button>
      </Wrapper>
    </Content>
  )
}

const MemoizedHome = memo(Home)

MemoizedHome.displayName = 'Home'

export default MemoizedHome
