import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import GlobalStyle from '../layout/globalStyle'

import createStore from '../store/configureStore'

function App({ Component, pageProps }: AppProps) {
  const store = createStore()

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  )
}

export default App
