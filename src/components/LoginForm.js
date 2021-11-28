import React from "react";

export default function LoginForm() {
    return (
        <div className='login-form'>
            <form>
                <div className='input-group'>
                    <label htmlFor='login-email'>Email</label>
                    <input type='email' name='login-email' id='login-email' />
                </div>
                <div className='input-group'>
                    <label htmlFor='login-password'>Password</label>
                    <input type='login-password' name='passowrd' id='login-password' />
                </div>
            </form>
        </div>
    );
}
