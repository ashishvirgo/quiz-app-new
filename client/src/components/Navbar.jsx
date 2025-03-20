import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/adduser">Add User</Link>
      <Link to="/edituser">Edit User</Link>
      <Link to="/changepassword">Change Password</Link>

    </div>
  )
}

export default Navbar
