import React, { useRef, useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

//get theme from localStorage if we have it
const getLocalStorageTheme = () => {
    const theme = localStorage.getItem('theme');
    //check if we have theme in local storage, then return it, else return by default light theme
    if (theme) {
        return theme;
    } else {
        return 'light-theme'
    }
}

const Navbar = () => {
    //state for current theme
    const [theme, setTheme] = useState(getLocalStorageTheme());

    //ref for toggle button
    const switchRef = useRef(null);

    //function to check class
    const checkClassName = () => {
        //get current class using our ref button, and return theme name
        const currentClass = switchRef.current.className;
        if (currentClass.includes('switch-toggle')) {
            switchRef.current.className = 'theme-switch';
            return 'light-theme'
        } else {
            switchRef.current.className += ' switch-toggle';
            return 'dark-theme'
        }
    }

    const toggleMode = () => {
        const theme = checkClassName();
        //toggle theme
        setTheme(theme)
    }

    // add useEffect on load to add class by default based on what theme we have in storage
    useEffect(() => {
        if (theme === 'light-theme') {
            switchRef.current.className = 'theme-switch'
        } else {
            switchRef.current.className = 'theme-switch switch-toggle'
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        //get html element and set theme to html
        document.documentElement.className = `${theme}`
        //set theme to local storage when user switch theme
        localStorage.setItem('theme', theme)
    }, [theme])

    //src for image based on theme
    const imgSrc = (theme === 'light-theme') ? 'https://res.cloudinary.com/dljezd6qv/image/upload/v1619820552/main-logo.png' : 'https://res.cloudinary.com/dljezd6qv/image/upload/v1619821176/main-logo-white-small.png';



    return (
        <nav>
            <div className="nav-center">
                <img src={imgSrc} alt="bacha-coding" />
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
