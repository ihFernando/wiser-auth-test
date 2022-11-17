import styled, { css } from 'styled-components'
import breakpoints from '@wiser/utils/breakpoints'

import { IButton } from './types'

const COLORS = {
  snow: '#ffffff',
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  accent: 'var(--color-accent)',
  light: 'var(--color-light)',
  darkMedium: 'var(--color-dark-medium)'
}

const THEME_BUTTON = {
  primary: {
    background: `linear-gradient(267.79deg, ${COLORS.darkMedium} 0%, ${COLORS.secondary} 99.18%)`,
    color: COLORS.snow,
    boxShadow: `0px 10px 25px ${COLORS.accent}`
  },
  secondary: {
    background: COLORS.light,
    color: COLORS.snow,
    boxShadow: ''
  }
}

const Button = styled.button<IButton>`
  position: relative;
  max-width: 35rem;
  width: 100%;
  height: 3rem;
  margin: 0;
  border-radius: 0.25rem;
  transition: 500ms;
  align-items: center;
  justify-content: center;
  color: ${COLORS.snow};
  border-radius: var(--theme-border-radius);
  text-transform: uppercase;

  &:hover {
    transform: translateY(-0.25rem);
    cursor: pointer;
  }

  &:active,
  &:focus {
    outline: none;
  }

  ${({ isBold }) =>
    isBold &&
    css`
      font-weight: 600;
    `};

  ${({ modifier }) =>
    modifier &&
    css`
      color: ${THEME_BUTTON[modifier].color};
      background: ${THEME_BUTTON[modifier].background};

      @media screen and ${breakpoints.tablet} {
        box-shadow: ${THEME_BUTTON[modifier].boxShadow};
      }
    `};
`

export { Button }
