import React from 'react';
import Img from "../img/image.png";
import Attach from "../img/attach.png";

const Input = () => {
  return (
    <div className='input-container'>
      <input type="text" placeholder='Your message here...' />
      <div className="send">
        <img src={Attach} width={20} height={20} alt="" />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src={Img} width={20} height={20} alt="" />
        </label>
      </div>
      <button>Send</button>
    </div>
    
  )
}

export default Input
