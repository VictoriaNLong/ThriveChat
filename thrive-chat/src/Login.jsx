import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return (
        <div className="form-container">
            <form className="login" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@email.com"
                    id="email"
                    name="email"
                />

                <label htmlFor="password">password</label>
                <input
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    placeholder="*********"
                    id="password"
                    name="password" />
                <button>Log In</button>

            </form>
            <button
                onClick={() => props.onFormSwitch('register')}>
                Don't have an account? Register here.
            </button>
            </div>
    )
}