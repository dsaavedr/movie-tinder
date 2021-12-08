import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { signInWithPassword, signInWithGoogle, logout } from "../firebase";

import { useAuth } from "../contexts/AuthContext";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    const { isLoggedIn, currentUser } = useAuth();

    useEffect(() => {
        setLoggedIn(currentUser !== null);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        setLoading(true);

        signInWithPassword(email, password)
            .then(res => {
                alert("Login successful!");
                setLoggedIn(true);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                alert("Something went wrong on our end. Please try again.");
                setLoading(false);
            });
    };

    const handleSignInWithGoogle = e => {
        setLoading(true);

        signInWithGoogle()
            .then(res => {
                alert("Login successful!");
                setLoggedIn(true);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                alert("Something went wrong on our end. Please try again.");
                setLoading(false);
            });
    };

    return (
        <div className='login-form'>
            {isLoggedIn ? <Navigate to='/' /> : null}
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
                    <button disabled={loading} type='submit'>
                        CONNECT
                    </button>
                </div>
                <div className='input-group google'>
                    <button disabled={loading} type='button' onClick={handleSignInWithGoogle}>
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
