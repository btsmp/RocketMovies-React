import React from 'react'
import './styles/main.css'

import ReactDOM from 'react-dom/client'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Home } from './pages/Home';
import { Profile } from './pages/Profile'
import { MovieNote } from './pages/MovieNote'
import { NewNote } from './pages/NewNote'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewNote />
  </React.StrictMode>
)
