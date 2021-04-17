import React, { MouseEventHandler } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

interface ThemeSwitcherProps {
    darkMode: boolean,
    handleClick: MouseEventHandler
};

// export default function ThemeSwitcher({darkMode, handleClick} : ThemeSwitcherProps) {
const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({darkMode, handleClick}) => {
    return (
        <button className="app__dark-mode-btn icon level-right" onClick={handleClick}>
            <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                color={darkMode ? '#FFA500' : '#4D5B6B'}
            />
        </button>
    );
};

export default ThemeSwitcher;
