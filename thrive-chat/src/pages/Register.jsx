import React from 'react'
import { Link } from 'react-router-dom'
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
   
          const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
          };
          try {
            await axios.post("/auth/register", user);
            navigate("/login");
          } catch (err) {
            console.log(err);
          }
        
      };

    return (
        <div className='form-container'>
            <div className="form-wrapper">
                <span className='thrivechat'>ThriveChat</span>
                <span className="title">Register</span>
                <form onSubmit={handleClick}>
                    {/* <form onSubmit={handleSubmit}> */}
                    {/* to replace line 26 */}
                    <input
                        className='input-name'
                        type="text"
                        ref={username}
                        placeholder='Username'
                        required
                    />
                    <input
                        className='input-email'
                        type="email"
                        ref={email}
                        placeholder='email'
                        required
                    />
                    <input
                        className='input-password'
                        type="password"
                        ref={password}
                        placeholder='******'
                        required
                    />
                    {/* <input
                        className='input-file'
                        type="file" /> */}
                    <button className='signup-button' type='submit'>Sign up</button>
                </form>

                <p className='signup-login'>I have an account.<Link to="/login"> Login</Link></p>

            </div>
        </div>
    )
}

export default Register