import React, { MouseEventHandler } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

interface ThemeSwitcherProps {
    darkMode: string,
    handleClick: MouseEventHandler
}

export default function ThemeSwitcher({darkMode, handleClick} : ThemeSwitcherProps) {
    return (
        <button className="app__dark-mode-btn icon level-right" onClick={handleClick}>
            <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                color={darkMode ? '#FFA500' : '#4D5B6B'}
            />
        </button>
    );
}