import ReactDOM from 'react-dom/client';
import React from 'react';
import './styles/main.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { Notify } from './components/notify';
import { AuthProvider } from './hooks/auth';
import { CLIENT_ID_GOOGLE } from '../env'
import { Routes } from './routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID_GOOGLE}>
      <AuthProvider>
        <Routes />
        <Notify />
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
