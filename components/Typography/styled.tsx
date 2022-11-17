import styled, { css } from 'styled-components'
import breakpoints from '@wiser/utils/breakpoints'
import { ITypography } from './types'

const Typography = styled.p<ITypography>`
  color: var(--color-${({ color }) => color});
  font-size: var(--text-${({ size }) => size});
  font-weight: ${({ isBold }) => (isBold ? '600' : '300')};
  ${({ isUppercase }) =>
    isUppercase &&
    css`
      text-transform: uppercase;
    `}
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}
  ${({ alignLargeDisplay }) =>
    alignLargeDisplay &&
    css`
      @media screen and ${breakpoints.tablet} {
        text-align: ${alignLargeDisplay};
      }
    `}
  ${({ sizeLargeDisplay }) =>
    sizeLargeDisplay &&
    css`
      @media screen and ${breakpoints.tablet} {
        font-size: var(--text-${sizeLargeDisplay});
      }
    `}
  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${pb}rem;
    `}
`

export { Typography }
