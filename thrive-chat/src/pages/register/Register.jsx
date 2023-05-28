import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Register = () => {

    // // to navigate between login and register pages
    // const [err, setErr] = useState(false)
    // const navigate = useNavigate()

    // // to prevent refreshing of page
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const name = e.target[0].value;
    //     const email = e.target[1].value;
    //     const password = e.target[2].value;
    //     const file = e.target[3].value;

    // }

    // container for the registration form
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

                <p className='signup-login'>I have an account.<Link to="/login"> Login</Link></p>

            </div>
        </div>
    )
}

export default Register