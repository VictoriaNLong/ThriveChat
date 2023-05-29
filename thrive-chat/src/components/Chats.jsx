import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="user-chats">
        <img src="https://images.pexels.com/photos/16931542/pexels-photo-16931542/free-photo-of-love-romantic-summer-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={30} height={30} alt="user-chat-img" />
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
