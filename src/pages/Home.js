import React from "react";
import { Navigate } from "react-router";

import ServiceSelect from "../components/ServiceSelect";

import { useAuth } from "../contexts/AuthContext";

export default function Home() {
    const { currentUser } = useAuth();

    let name;

    if (currentUser) {
        name = currentUser.displayName
            ? currentUser.displayName.split(" ")[0]
            : currentUser.name
            ? currentUser.name
            : null;
    }

    return currentUser ? (
        <div className='home'>
            <h1>Hi{name ? `, ${name}` : ""}!</h1>
            <h2>Please select your available streaming services</h2>
            <ServiceSelect />
        </div>
    ) : (
        <Navigate to='/login' />
    );
}
