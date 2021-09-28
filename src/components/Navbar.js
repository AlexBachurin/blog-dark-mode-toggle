import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
const Navbar = () => {
    return (
        <nav>
            <div className="nav-center">
                <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1619820552/main-logo.png" alt="bacha-coding" />
                <h1 nav-title>My Blog</h1>
                <button className="theme-toggle">
                    <span><FaMoon className="theme-icon" /></span>
                    <span><FaSun className="theme-icon" /></span>
                    <button className="theme-switch"></button>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
