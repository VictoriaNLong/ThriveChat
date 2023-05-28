import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">ThriveChat</span>
      <div className="user">
        {/* TODO: image for profile */}
        <img src="" alt="" />
        <span>Jessica</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
