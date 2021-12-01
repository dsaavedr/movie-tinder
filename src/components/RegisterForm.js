import React, { useState } from "react";
import { Link } from "react-router-dom";

import { registerWithPassword } from "../firebase";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        registerWithPassword(name, email, password)
            .then(res => {
                alert("Account successfully created!");
            })
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                        alert("Oops! Looks like that email already exists.");
                        window.location = "/login";
                        break;

                    default:
                        console.error(err);
                        alert("Something went wrong on our end. Please try again.");
                        break;
                }
            });
    };

    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label htmlFor='register-name'>Name</label>
                    <input
                        type='text'
                        required
                        name='register-name'
                        id='register-name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor='register-email'>Email</label>
                    <input
                        type='email'
                        required
                        name='register-email'
                        id='register-email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor='login-password'>Password</label>
                    <input
                        type='password'
                        required
                        name='login-passowrd'
                        id='login-password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className='input-group submit'>
                    <button type='submit'>SIGN UP</button>
                </div>
                <div className='input-group extra-options'>
                    <Link to='/login'>Or go back</Link>
                </div>
            </form>
        </div>
    );
}
