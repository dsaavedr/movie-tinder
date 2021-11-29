import React, { useState } from "react";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='login-form'>
            <form>
                <div className='input-group'>
                    <label htmlFor='register-name'>Name</label>
                    <input
                        type='email'
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
                        name='register-email'
                        id='register-email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor='register-password'>Password</label>
                    <input
                        type='password'
                        name='register-passowrd'
                        id='register-password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <button type='submit'>SIGN UP</button>
                </div>
            </form>
        </div>
    );
}
