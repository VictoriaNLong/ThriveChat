import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="user-chats">
        {/* TODO: add image, same as Navbar.jsx */}
        {/* <img src="" alt="user-chat-img" /> */}
        <div className="user-chats-info">
          <span>User-reciever-2</span>

          {/* for latest message to display */}
          <p>Lates message here</p>
        </div>

      </div>
    </div>
  )
}

export default Chats
