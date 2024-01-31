"use client";
import { useState } from 'react';

const usedarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    };

    return [darkMode, toggleDarkMode];
}

export default usedarkMode;