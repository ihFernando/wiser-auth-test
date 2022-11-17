import styled from 'styled-components'
import breakpoints from '@wiser/utils/breakpoints'

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0.125rem);
  z-index: 1;
  transition: 500ms;

  @media screen and ${breakpoints.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Box = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 10rem;
  left: 0;
  bottom: 0;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: var(--theme-border-radius) var(--theme-border-radius) 0 0;
  box-shadow: 0 0 1.5rem rgba(40, 40, 40, 0.1);
  z-index: 1;

  @media screen and ${breakpoints.tablet} {
    position: relative;
    width: 15rem;
    border-radius: var(--theme-border-radius);
  }
`

export { Overlay, Box }
