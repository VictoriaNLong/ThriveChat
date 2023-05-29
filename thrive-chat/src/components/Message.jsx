// the main message that user is sending out in input
import React from 'react'

const Message = () => {
  return (
    <div className='message-container mainUser'>
      <div className="message-info">
        <img src="https://images.pexels.com/photos/16450166/pexels-photo-16450166/free-photo-of-little-kitten.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" width={30} height={30} alt=""></img>
        <span>just now</span>
      </div>
      <div className="message-content mainUser">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/16796419/pexels-photo-16796419/free-photo-of-woman-posing-near-vegetables-on-bazaar.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" width={30} height={30} alt=""></img>
      </div>
    </div>
  )
}

export default Message
