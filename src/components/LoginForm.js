import React, { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='login-form'>
            <form>
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
                <div className='input-group'>
                    <a href='#' className='recover-password'>
                        Forgot your password?
                    </a>
                </div>
            </form>
        </div>
    );
}
