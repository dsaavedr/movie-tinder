import React from "react";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
    return (
        <div className='container container--register'>
            <div className='row center-y'>
                <div className='col'>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
}
