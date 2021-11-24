import React from "react";

export default function ServiceCard(props) {
    const Logo = props.test;

    return (
        <div className='service-card'>
            <div className='logo-container'>
                <Logo className='logo' />
            </div>
        </div>
    );
}
