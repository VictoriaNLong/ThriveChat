import { useState } from "react";

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return (
        <div className="form-container">
            <form className="register" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input
                    value={name}
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}

                />

                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@email.com"


                />

                <label htmlFor="password">password</label>
                <input
                    value={password}
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder="*********"
                />

                <button className="login-button">Log In</button>

            </form>
            <button
                onClick={() => props.onFormSwitch('login')}>
                Already have an account? Login here.
            </button>
        </div>
    )
}