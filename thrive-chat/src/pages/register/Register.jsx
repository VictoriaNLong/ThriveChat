import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    return (
        <div className='form-container'>
            <div className="form-wrapper">
                <span className='thrivechat'>ThriveChat</span>
                <span className="title">Register</span>
                <form>
                    {/* <form onSubmit={handleSubmit}> */}
                    {/* to replace line 26 */}
                    <input
                        className='input-name'
                        type="text"
                        placeholder='Username'
                        required
                    />
                    <input
                        className='input-email'
                        type="email"
                        placeholder='email'
                        required
                    />
                    <input
                        className='input-password'
                        type="password"
                        placeholder='******'
                        required
                    />
                    {/* <input
                        className='input-file'
                        type="file" /> */}
                    <button className='signup-button'>Sign up</button>
                </form>

                <p className='signup-login'>I have an account.<Link to="/login"> Login</Link></p>

            </div>
        </div>
    )
}

export default Register