import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RouterConfig from './config/RouterConfig'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'

function App() {

  return (
    <>
    <Navbar/>
    <RouterConfig/>
    <Auth/>
    </>
  )
}

export default App
