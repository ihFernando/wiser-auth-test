import styled from 'styled-components'
import breakpoints from '@wiser/utils/breakpoints'

import imgBgMobile from '@wiser/assets/images/bg-login-mobile.jpg'
import imgBgDesktop from '@wiser/assets/images/bg-login-desktop.jpg'

const Content = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0;
  background-color: var(--color-dark);
  background-image: url(${imgBgMobile});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 40% 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      0deg,
      var(--color-dark) 0%,
      rgba(105, 57, 153, 0.03) 100%
    );
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      0deg,
      rgb(105, 57, 153, 0) 10%,
      transparent 100%
    );
  }

  @media screen and ${breakpoints.tablet} {
    display: block;
    background-size: cover;
    background-position: -18rem 0rem;

    &::before {
      content: '';
      height: 100%;
    }

    &::after {
      content: '';
      position: relative;
    }
  }

  @media screen and ${breakpoints.desktop} {
    background-image: url(${imgBgDesktop});
    background-position: 0 0;
    background-size: 70%;
  }
`

const Wrapper = styled.div`
  position: relative;
  width: 19.5rem;
  padding: 1.5rem;
  margin: 0 auto;
  background-color: var(--color-light-high);
  border-radius: var(--theme-border-radius);
  z-index: 1;

  @media screen and ${breakpoints.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30rem;
    height: 100%;
    margin: 0 0 0 auto;
    border-radius: 0;
  }
  @media screen and ${breakpoints.desktop} {
    width: 40rem;
  }
`

const Form = styled.div`
  @media screen and ${breakpoints.tablet} {
    width: 22rem;
  }
`

export { Content, Wrapper, Form }
