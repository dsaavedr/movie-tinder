import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { signInWithPassword, signInWithGoogle } from "../firebase";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        signInWithPassword(email, password)
            .then(res => {
                alert("Login successful!");
                setLoggedIn(true);
            })
            .catch(err => {
                console.error(err);
                alert("Something went wrong on our end. Please try again.");
            });
    };

    const handleSignInWithGoogle = e => {
        signInWithGoogle()
            .then(res => {
                alert("Login successful!");
                setLoggedIn(true);
            })
            .catch(err => {
                console.error(err);
                alert("Something went wrong on our end. Please try again.");
            });
    };

    return (
        <div className='login-form'>
            {loggedIn ? <Navigate to='/' /> : null}
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label htmlFor='login-email'>Email</label>
                    <input
                        type='email'
                        name='login-email'
                        id='login-email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor='login-password'>Password</label>
                    <input
                        type='password'
                        name='login-passowrd'
                        id='login-password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <button type='submit'>CONNECT</button>
                </div>
                <div className='input-group google'>
                    <button type='button' onClick={handleSignInWithGoogle}>
                        SIGN IN WITH GOOGLE
                    </button>
                </div>
                <div className='input-group extra-options'>
                    <Link to='/recovery'>Forgot your password?</Link>
                    <span>
                        Don't have an account? <Link to='/register'>Sign up</Link>
                    </span>
                </div>
            </form>
        </div>
    );
}
