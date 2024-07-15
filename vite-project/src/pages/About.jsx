import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <hr />
        <Link to="employee">View all Employees</Link>
        <Link to="company">View all Companys</Link>

        <Outlet/>
    </div>
  )
}

export default About