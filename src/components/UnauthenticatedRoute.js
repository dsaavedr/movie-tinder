import React, { cloneElement } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function UnauthenticatedRoute(props) {
    const { children, ...rest } = props;
    const { isLoggedIn } = useAuth();

    return (
        <Route {...rest}>{!isLoggedIn ? cloneElement(children, props) : <Navigate to='/' />}</Route>
    );
}
