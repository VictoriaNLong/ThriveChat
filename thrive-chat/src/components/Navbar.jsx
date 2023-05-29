import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">ThriveChat</span>
      <div className="user">
        {/* TODO: image for profile */}
        <img src="https://images.pexels.com/photos/16450166/pexels-photo-16450166/free-photo-of-little-kitten.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={30} height={30} alt="profile pic" />
        <span>Jessica</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
