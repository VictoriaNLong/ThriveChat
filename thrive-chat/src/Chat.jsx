import React from 'react';
import './Chat.css';

const Chat = () => {
    return (
        <div className="Chat">
            {/* Left Side */}
            <div className="Left-side-chat">
                <h2>Chat</h2>
                <div className="Chat-List">
                    Conversations
                </div>
            </div>

            {/* Right Side */}
            <div className="Right-side-chat">
                Right side
            </div>
        </div>
    )
}

export default Chat