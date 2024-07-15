import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>about</Link>
        <Link to='/products'>Products</Link>
        <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Header