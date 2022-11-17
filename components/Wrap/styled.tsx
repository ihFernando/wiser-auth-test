import styled, { css } from 'styled-components'

const Wrap = styled.div<{ mb?: number; pb?: number }>`
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb}rem;
    `};

  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${pb}rem;
    `};
`

export { Wrap }
