import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import App from './components/App';
import './sass/_main.scss';

// Web Storage is an API to store data in the browser
// localStorage persists data as string

// theme expects three values: 'light' or 'dark' or null
// skips the componentDidMount(useEffect) in App, prevents re-render

const theme = localStorage.getItem('theme');

ReactDOM.render(
    <AppContainer>
        <App themeProps={theme} />
    </AppContainer>,
    document.getElementById('root')
);