import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
        <div className='logo'><h4> MHFR FACILITY MANAGEMENT</h4></div>
        <div className='links'>
        <Link className='link' to="/"><h6> Home </h6></Link>
        <Link className='link' to="/new"><h6> NewFacility </h6></Link>
        </div>

        </div>
    </div>
  )
}

export default Navbar