import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  // Reset CSS
  button {
    -webkit-font-smoothing: antialiased;
    font: inherit;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    line-height: inherit;
    user-select: none;
    -webkit-appearance: none;
  }
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  address,
  code,
  em,
  img,
  small,
  strong,
  sub,
  sup,
  tt,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  embed,
  figure,
  figcaption,
  footer,
  header,
  menu,
  nav,
  section,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  select::-ms-expand {
    display: none;
  }
  b {
    font: inherit;
    font-size: 100%;
    font-weight: 900;
    vertical-align: baseline;
  }

  :root {
    --text-title-g: 2.5rem;
    --text-title-m: 2rem;
    --text-title-p: 1.75rem;
    --text-body-g: 1.25rem;
    --text-body-m: 1rem;
    --text-body-p: 0.75rem;
    --text-body-pp: 0.5rem;

    --color-dark: rgb(19,5,37);
    --color-dark-medium: rgb(56, 62, 113);
    --color-light: rgb(152,159,219);
    --color-light-high: rgb(250, 245, 255);

    --color-primary: rgb(105,57,153);
    --color-secondary: rgb(157, 37, 176);
    --color-accent: rgb(207, 153, 219);

    --color-alert: rgb(255,55,127);
    --color-alert-variant-low: rgb(255,55,127, 10%);
    --color-alert-variant-medium: rgb(255, 55, 127, 30%);
    --color-alert-variant-high: rgb(255, 55, 127, 50%);

    --theme-border-radius: 0.5rem;
    --theme-container: 75rem;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 300;
    word-wrap: break-word;
    font-kerning: normal;
    padding: 0;
    margin: 0;
    background-color: var(---color-light-high);
  }

  a {
    display: inline-block;
    text-decoration: underline;
  }

  a:hover {
    text-decoration: none;
  }

  strong {
    font-weight: 600;
  }
`

export default GlobalStyle
