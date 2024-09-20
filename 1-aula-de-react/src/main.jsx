import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Comments from '../Comments.jsx'
import Home from '../src/pages/Home.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
      <Home/>
)
