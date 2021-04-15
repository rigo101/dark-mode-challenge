import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

export default function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => setDarkMode(prevState => !prevState);

    return (
        <button className="app__dark-mode-btn icon level-right" onClick={handleClick}>
            <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                color={darkMode ? '#FFA500' : '#4D5B6B'}
            />
        </button>
    );
}