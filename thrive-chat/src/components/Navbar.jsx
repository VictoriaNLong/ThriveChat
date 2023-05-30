import { useContext } from "react"
import {AuthContext} from "../context/AuthContext"
import UserPic from "../img/user.png"
import { useParams } from "react-router";

const Navbar = () => {
  const username = useParams().username
  const {user} = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className="logo">ThriveChat</span>
      <div className="user">
        {/* TODO: image for profile */}
        <img src={UserPic} width={30} height={30} alt="profile pic" />
        <span>{user?.username}</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
