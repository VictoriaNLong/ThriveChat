// What's being sent out of input

import Message from './Message';
import Navbar from "./Navbar";
import Search from '../components/Search';
import Chats from "./Chats";
import Camera from "../img/camera.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import Img from "../img/image.png";
import Attach from "../img/attach.png";
import { useContext, useState, useEffect, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import io from "socket.io-client"


const Chat = () => {
  const [conversations, setConversations] = useState([]) 
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("")
 const {user} = useContext(AuthContext) 
 const scrollRef = useRef()

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
    setMessages(res.data)
  }catch (err) {
    console.log(err);
  }
  }
  getMessages()
 },[currentChat])

const handleSubmit =  async (e) => {
  e.preventDefault()
  const message = {
    sender: user._id,
    text: newMessage,
    conversationId: currentChat._id
  }
  try{
    const res = await axios.post("/messages", message)
    setMessages([...messages, res.data])
    setNewMessage(" ")
  }catch (err) {
    console.log(err);
  }
}

useEffect(() => {
scrollRef.current?.scrollIntoView({behavior: "smooth"})
},[messages])


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
        currentChat ? (
      
      <>
      <div className='chat-messages'>
        {messages.map((m) => (
          <div ref={scrollRef}>
          <Message message={m} own={m.sender === user._id} />
          </div>
        ))}
          
      </div> 
       </> ) : <span className='noConvo'>Open a Conversation</span>
       }

      <div className='input-container'>
      <input type="text" placeholder='Your message here...' 
      onChange={(e) => setNewMessage(e.target.value)}
      value={newMessage}/>
      <div className="send">
        <img src={Attach} width={20} height={20} alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src={Img} width={20} height={20} alt="" />
        </label>
      </div>
      <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>

    </div>
    </div>
   </>
  )
}

export default Chat
