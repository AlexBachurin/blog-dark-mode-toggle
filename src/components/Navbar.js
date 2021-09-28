import React, { useRef, useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
const Navbar = () => {
    //state for current theme
    const [theme, setTheme] = useState('light-theme');

    //ref for toggle button
    const switchRef = useRef(null);

    //function to check class
    const checkClassName = () => {
        //get current class using our ref button, and toggle it 
        const currentClass = switchRef.current.className;
        if (currentClass.includes('switch-toggle')) {
            switchRef.current.className = 'theme-switch';
            setTheme('light-theme')
        } else {
            switchRef.current.className += ' switch-toggle';
            setTheme('dark-theme');
        }
    }

    const toggleMode = () => {

        checkClassName();

    }

    useEffect(() => {
        //get html element and set theme to html
        document.documentElement.className = `${theme}`
    }, [theme])
    return (
        <nav>
            <div className="nav-center">
                <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1619820552/main-logo.png" alt="bacha-coding" />
                <h1 className="nav-title">My Blog</h1>
                <div onClick={toggleMode} className="theme-toggle">
                    <span><FaSun className="theme-icon" /></span>
                    <span><FaMoon className="theme-icon" /></span>
                    <button ref={switchRef} className="theme-switch"></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
