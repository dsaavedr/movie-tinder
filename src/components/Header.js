import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const logo = null || <Link to='/'>Logo</Link>;

    return (
        <nav className='menu'>
            {/* 1. Left menu */}
            <ul>
                <li className='menu__item'>Item 1</li>
                <li className='menu__item'>Item 2</li>
                <li className='menu__item'>Item 3</li>
            </ul>
            {/* 2. Logo */}
            <a href='#' className='logo'>
                {logo}
            </a>
            {/* 3. Right menu */}
            <ul>
                <li className='menu__item'>Item 1</li>
                <li className='menu__item'>
                    <Link to='login'>Login</Link>
                </li>
            </ul>
        </nav>
    );
}
