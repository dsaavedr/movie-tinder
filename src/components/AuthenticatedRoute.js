import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AuthenticatedRoute({ children, ...rest }) {
    const { pathname, search } = useLocation();

    const { isLoggedIn } = useAuth();

    return isLoggedIn ? <Outlet /> : <Navigate to={`/login?redirect=${pathname}${search}`} />;
}
