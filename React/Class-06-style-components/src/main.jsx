import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Reaet from "./styles/reset"
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
      <Reaet/>
    </ThemeProvider>
  </React.StrictMode>,
)
