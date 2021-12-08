import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function UnauthenticatedRoute(props) {
    const { children, ...rest } = props;
    const { isLoggedIn } = useAuth();

    return !isLoggedIn ? <Outlet /> : <Navigate to='/' />;
}
