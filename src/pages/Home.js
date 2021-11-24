import React from "react";

import ServiceSelect from "../components/ServiceSelect";

export default function Home() {
    const Username = "User";
    return (
        <div className='home'>
            <h1>Hi, {Username}!</h1>
            <h2>Please select your available streaming services</h2>
            <ServiceSelect />
        </div>
    );
}
