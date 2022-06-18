import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { useContext } from 'react'

import ThemeContext from './storage/storage';
import mainContext from './storage/storage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext.Consumer>
      {() => (<App />)}
    </ThemeContext.Consumer>
  </React.StrictMode>
)
