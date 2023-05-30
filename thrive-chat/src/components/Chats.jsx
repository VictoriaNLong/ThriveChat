import { useState, useEffect } from 'react'
import UserPic from "../img/user.png"
import axios from 'axios'

const Chats = ({conversation, currentUser}) => {
  const [user,setUser] = useState(null)

  useEffect(() =>{
    const friendId = conversation.members.find((m) => m !== currentUser._id)

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId)
        setUser(res.data)
      }catch (err) {
        console.log(err);
      }
    }
    getUser()
  },[currentUser, conversation])

  return (
    <div className='chats'>
      <div className="user-chats">
        <img src={UserPic} width={30} height={30} alt="user-chat-img" />
        <div className="user-chats-info">
          <span>{user?.username}</span>

          {/* for latest message to display */}
          <p>Latest message here</p>
        </div>

      </div>
    </div>
  )
}

export default Chats
