// What's being sent out of imput
import React from 'react'
import { ChatMessages } from './ChatMessages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-info">
        <span>User-reciever-1</span>
      </div>
      <ChatMessages />
      <Input />
    </div>

  )
}

export default Chat
