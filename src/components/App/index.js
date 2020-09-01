import { inject } from 'mobx-react'
import App from './App'

export default inject((appState) => ({
  appMounted: appState?.appMounted,
  appWillUnmount: appState?.appWillUnmount,
}))(App)
