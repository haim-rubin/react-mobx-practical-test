import React, { useEffect } from 'react'
import './App.css'
import Developers from '../Developers'

const App = ({ appMounted, appWillUnmount }) => {
  useEffect(() => {
    appMounted()
    return () => {
      appWillUnmount()
    }
  })

  return (
    <div className="app">
      <header className="app-header">
        React Mobx test
      </header>
      <Developers  />

    </div>
  )
}

export default App
