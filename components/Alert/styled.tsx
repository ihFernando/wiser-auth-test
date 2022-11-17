import styled, { keyframes } from 'styled-components'

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
    visibility: visible;
  }
`

const Alert = styled.div`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background: var(--color-alert-variant-low);
  border: 1px solid var(--color-alert-variant-medium);
  box-shadow: 0 0 0.5rem var(--color-alert-variant-high);
  border-radius: var(--theme-border-radius);
  opacity: 0;
  visibility: hidden;
  animation: ${fadeInAnimation} 500ms forwards;
`

export { Alert }
