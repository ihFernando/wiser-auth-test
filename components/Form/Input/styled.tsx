import styled from 'styled-components'

const Fieldset = styled.fieldset`
  position: relative;
`

const Input = styled.input<{ hasError: boolean }>`
  position: relative;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  margin: 0.5rem 0;
  color: var(--color-light);
  border: 1px solid
    ${({ hasError }) =>
      hasError ? 'var(--color-alert)' : 'var(--color-light)'};
  border-radius: var(--theme-border-radius);
  box-sizing: border-box;
  transition: 400ms;
  outline: none;
  will-change: border;

  &:focus {
    ${({ hasError }) =>
      !hasError &&
      `
        border-color: var(--color-primary);
        transition: 600ms;
      `}
  }

  &::placeholder {
    color: var(--color-light);
  }
`

const Error = styled.div<{ show: boolean }>`
  position: relative;
  top: 0rem;
  left: 1rem;
  margin-bottom: 1rem;
  transition: 300ms;

  ${({ show }) =>
    show
      ? `
      max-height: 1rem;
      visibility: visible;
      opacity: 1;
  `
      : `
      max-height: 0;
      visibility: hidden;
      opacity: 0;
  `}
`

const IconError = styled.div<{ show: boolean }>`
  position: absolute;
  top: 2rem;
  right: 1rem;
  width: 0.75rem;
  height: 0.75rem;

  ${({ show }) =>
    show
      ? `
      visibility: visible;
      opacity: 1;
  `
      : `
      visibility: hidden;
      opacity: 0;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.05rem;
    background: var(--color-alert);
    border-radius: var(--theme-border-radius);
    transform: rotate(-45deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.05rem;
    background: var(--color-alert);
    border-radius: var(--theme-border-radius);
    transform: rotate(45deg);
  }
`

export { Fieldset, Input, Error, IconError }
