// What's being sent out of input

import Message from './Message';
import Input from './Input';
import Navbar from "./Navbar";
import Search from '../components/Search';
import Chats from "./Chats";
import Camera from "../img/camera.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';


const Chat = () => {
  const [conversations, setConversations] = useState([]) 
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
 const {user} = useContext(AuthContext) 

    useEffect(() =>{
    const getConversations = async () =>{
      try{
      const res = await axios.get("/conversations/" + user._id)
      setConversations(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    getConversations()
  }, [user._id])

 useEffect(() => {
  const getMessages = async ()=>{
    try{
    const res = await axios.get("/messages/" + currentChat?._id)
    setMessages((await res).data)
  }catch (err) {
    console.log(err);
  }
  }
  getMessages()
 },[currentChat])

 console.log(messages)
  return (
    <>
    <div className='sidebar'>
      
      <Navbar />
      <Search />
      {conversations.map((c) => (
        <div onClick={()=>setCurrentChat(c)}>
        <Chats conversation={c} currentUser={user} />  
        </div>
      ))}
     
    </div>
    <div className='chat'>
      <div className="chat-info">
        <span></span>
        <div className='chat-icons'>
          <img src={Camera} width={20} height={20} alt="camera icon" />
          <img src={Add} width={20} height={20} alt="add icon" />
          <img src={More} width={20} height={20} alt="more icon" />
        </div>
      </div>
      {
        currentChat ?
      
      <>
      <div className='chat-messages'>
        {messages.map((m) => (
          <Message message={m} />
        ))}
          
      </div> 
       </> : <span className='noConvo'>Open a Conversation</span>
       }
      <Input />
    </div>
   </>
  )
}

export default Chat
