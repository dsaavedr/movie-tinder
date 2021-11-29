import React, { useState } from "react";

export default function RecoveryForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='login-form'>
            <form>
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
                    <button type='submit'>SEND RECOVERY EMAIL</button>
                </div>
            </form>
        </div>
    );
}
