import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {AuthProvider} from 'react-oauth2-code-pkce'
import App from './App.jsx'
import { authConfig } from './authConfig.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider authConfig={authConfig}
      loadingComponent={<div>Loading...</div>}
    >
      <App />
    </AuthProvider>
  </StrictMode>,
)
