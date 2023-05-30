import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { loginCall } from '../backendCalls'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const email = useRef()
    const password = useRef()
    const {user, isFetching, dispatch} = useContext(AuthContext)


  const handleClick = (e) =>{
    e.preventDefault()
    loginCall({email:email.current.value,password:password.current.value}, dispatch)
  }

  console.log(user)

  return (
    <div className='form-container'>
      <div className="form-wrapper">
        <span className='thrivechat'>ThriveChat</span>
        <span className="title">Login</span>
        <form onSubmit={handleClick}>
          {/* <form onSubmit={handleSubmit}> */}
          {/* to replace line 31 */}

          <input
            className='input-email'
            type="email"
            placeholder='email'
            ref={email}
            required />
          <input
            className='input-password'
            type="password"
            placeholder='******'
            ref={password}
            required />

          <button className='login-button' type='submit'>{isFetching ? "Logging In" : "Log In"}</button>
        </form>

        <p className='signup-login'>You don't have an account? <Link to="/register">Register</Link></p>

      </div>
    </div>
  )
}


export default Login