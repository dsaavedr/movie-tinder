import React from "react";
import { Navigate } from "react-router";

import ServiceSelect from "../components/ServiceSelect";

import { useAuth } from "../contexts/AuthContext";

export default function Home() {
    const { currentUser } = useAuth();

    return currentUser ? (
        <div className='home'>
            <h1>Hi, {currentUser.displayName}</h1>!
            <h2>Please select your available streaming services</h2>
            <ServiceSelect />
        </div>
    ) : (
        <Navigate to='/login' />
    );
}
