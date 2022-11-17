import styled from 'styled-components'

const Content = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: var(--theme-container);
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`

const Wrapper = styled.div`
  max-width: 25rem;
  width: 100%;
  padding: 1rem;
`

export { Content, Wrapper }
