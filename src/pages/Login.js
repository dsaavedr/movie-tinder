import React from "react";
import LoginForm from "../components/LoginForm";

export default function Login() {
    return (
        <div className='container container--login'>
            <div className='row center-y'>
                <div className='col-md-6 md-none'>Logo</div>
                <div className='col-md-6'>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
