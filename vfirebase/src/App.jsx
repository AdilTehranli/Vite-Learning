import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RouterConfig from './config/RouterConfig'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <Navbar/>
    <RouterConfig/>
    <ToastContainer position='top-right' autoClose={2000}/>
    </>
  )
}

export default App
