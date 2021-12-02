import React, { useContext, useEffect, useState } from "react";

import { auth } from "../firebase";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const value = {
        currentUser
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
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
