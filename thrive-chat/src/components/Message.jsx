// the main message that user is sending out in input
import React from 'react'

const Message = (message, own) => {
  return (
    <div className={own ? "message own" : "message"}>
        <p className="messageText">{message.text}</p>
    </div>
  );
}

export default Message
