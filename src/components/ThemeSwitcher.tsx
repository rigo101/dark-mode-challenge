import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import * as actions from '../redux/actions';
import { useDispatch } from 'react-redux';

interface ThemeSwitcherProps {
    darkMode: boolean
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({darkMode}) => {
    const dispatch = useDispatch();

    return (
        <button
            className="app__dark-mode-btn icon level-right"
            onClick={() => dispatch(actions.toggleDarkTheme())}
        >
            <FontAwesomeIcon
                icon={darkMode ? faSun : faMoon}
                color={darkMode ? '#FFA500' : '#4D5B6B'}
            />
        </button>
    );
};

export default ThemeSwitcher;
