import React, { useContext, useEffect, useState } from "react";

import { auth } from "../firebase";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const value = {
        currentUser,
        isLoggedIn
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setIsLoggedIn(user === null);
            setLoading(false);
        });

        // Unsubscribe auth state on component unmount (cleanup)
        return unsubscribe;
    }, []);

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
