import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

import { logout } from "../firebase";

export default function Header() {
    const logo = null || "Logo";

    const { isLoggedIn } = useAuth();

    return (
        <nav className='menu'>
            {/* 1. Left menu */}
            <ul>
                <li className='menu__item'>Item 1</li>
                <li className='menu__item'>Item 2</li>
                <li className='menu__item'>Item 3</li>
            </ul>
            {/* 2. Logo */}
            <Link className='logo' to='/'>
                {logo}
            </Link>
            {/* 3. Right menu */}
            <ul>
                <li className='menu__item'>Item 1</li>
                <li className='menu__item'>
                    {!isLoggedIn ? <Link to='/login'>Login</Link> : <a onClick={logout}>Logout</a>}
                </li>
            </ul>
        </nav>
    );
}
