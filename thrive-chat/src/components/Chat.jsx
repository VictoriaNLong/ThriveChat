// What's being sent out of imput
import React from 'react';
import { ChatMessages } from './ChatMessages';
import Input from './Input';
import Camera from "../img/camera.png"
import Add from "../img/add.png"
import More from "../img/more.png"


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-info">
        <span>User-reciever-1</span>
        <div className='chat-icons'>
          <img src={Camera} width={20} height={20} alt="camera icon" />
          <img src={Add} width={20} height={20} alt="add icon" />
          <img src={More} width={20} height={20} alt="more icon" />
        </div>
      </div>
      <ChatMessages />
      <Input />
    </div>

  )
}

export default Chat
