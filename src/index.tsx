import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import App from './components/App';
import './sass/_main.scss';

import { Provider } from 'react-redux';
import store from './store';

// Web Storage is an API to store data in the browser
// localStorage persists data as string

// theme expects three values: 'light' or 'dark' or null
// reading the localStorage here, skips the componentDidMount(useEffect) in App and thus prevents re-render

// const theme = localStorage.getItem('theme') as Theme;

ReactDOM.render(
    <Provider store={ store }>
        <AppContainer>
            <App />
        </AppContainer>
    </Provider>,
    document.getElementById('root')
);
