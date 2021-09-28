import React, { useRef } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
const Navbar = () => {
    //ref for toggle button
    const switchRef = useRef(null);

    const toggleMode = () => {
        //get current class using our ref button, and toggle it 
        const currentClass = switchRef.current.className;
        if (currentClass.includes('switch-toggle')) {
            switchRef.current.className = 'theme-switch'
        } else {
            switchRef.current.className += ' switch-toggle';
        }
    }
    return (
        <nav>
            <div className="nav-center">
                <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1619820552/main-logo.png" alt="bacha-coding" />
                <h1 className="nav-title">My Blog</h1>
                <div onClick={toggleMode} className="theme-toggle">
                    <span><FaMoon className="theme-icon" /></span>
                    <span><FaSun className="theme-icon" /></span>
                    <button ref={switchRef} className="theme-switch"></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
