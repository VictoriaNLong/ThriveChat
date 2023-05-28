import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const login = () => {
  // // to navigate between login and register pages
  // const [err, setErr] = useState(false)
  // const Navigate = useNavigate()

  // // to prevent refreshing of page
  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   const email = e.target[0].value;
  //   const password = e.target[1].value;

  //   try {

  //   }
  //   catch (err) {
  //     setErr(true);
  //   }

  // };


  return (
    <div className='form-container'>
      <div className="form-wrapper">
        <span className='thrivechat'>ThriveChat</span>
        <span className="title">Login</span>
        <form>
          {/* <form onSubmit={handleSubmit}> */}
          {/* to replace line 31 */}

          <input
            className='input-email'
            type="email"
            placeholder='email' />
          <input
            className='input-password'
            type="password"
            placeholder='******' />

          <button className='login-button'>Login</button>
        </form>

        <p className='signup-login'>You don't have an account? <Link to="/register">Register</Link></p>

      </div>
    </div>
  )
}


export default login