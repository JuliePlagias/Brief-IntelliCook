import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import DarkModeProvider from './component/DarkModeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App></App>
    </DarkModeProvider>
  </React.StrictMode>,
)
