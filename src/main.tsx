import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'todomvc-app-css/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement | DocumentFragment).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
