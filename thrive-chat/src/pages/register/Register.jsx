import React from 'react'

function Register() {
    return (
        <div className='form-container'>
            <div className="form-wrapper">
                <span className='thrivechat'>ThriveChat</span>
                <span className="title">Register</span>
                <form>
                    <input
                        className='input-name'
                        type="text"
                        placeholder='name' />
                    <input
                        className='input-email'
                        type="email"
                        placeholder='email' />
                    <input
                        className='input-password'
                        type="password"
                        placeholder='******' />
                    <input
                        className='input-file'
                        type="file" />
                    <button className='signup-button'>Sign up</button>
                </form>

                <p className='signup-login'>I have an account. Login</p>

            </div>
        </div>
    )
}

export default Register