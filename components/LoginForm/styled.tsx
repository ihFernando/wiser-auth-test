import styled from 'styled-components'
import breakpoints from '@wiser/utils/breakpoints'

import { Typography } from '@wiser/components/Typography/styled'

const Row = styled.div`
  position: absolute;
  width: 15rem;
  left: 50%;
  transform: translateX(-50%);

  @media screen and ${breakpoints.tablet} {
    position: relative;
    width: 100%;
  }
`

const WrapButton = styled.div`
  width: 10.5rem;
  margin: 0 auto 2rem;

  @media screen and ${breakpoints.tablet} {
    position: relative;
    width: 100%;
  }
`

const RecoverAccount = styled(Typography)`
  & a {
    color: var(--color-light-high);
  }
  @media screen and ${breakpoints.tablet} {
    color: var(--color-light);
    & a {
      color: var(--color-primary);
    }
  }
`

export { Row, WrapButton, RecoverAccount }
