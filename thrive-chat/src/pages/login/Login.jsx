import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {


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
            placeholder='email'
            required />
          <input
            className='input-password'
            type="password"
            placeholder='******'
            required />

          <button className='login-button'>Login</button>
        </form>

        <p className='signup-login'>You don't have an account? <Link to="/register">Register</Link></p>

      </div>
    </div>
  )
}


export default login