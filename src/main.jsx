import React from 'react'
import './styles/main.css'

import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'
import { Notify } from './components/notify'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="525163972680-nrtnr2ghp8tusofcdg398rttlkpagfq8.apps.googleusercontent.com">
      <AuthProvider>
        <Routes />
        <Notify />
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
