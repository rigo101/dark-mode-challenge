import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

// Web Storage is an API to store data in the browser
// localStorage persists data as string
// theme expects three values: 'light' or 'dark' or null

const storedTheme = localStorage.getItem('theme') === 'dark';

const initialState = {
    darkTheme: storedTheme
};

const store = createStore(rootReducer, initialState, composeWithDevTools());

store.subscribe(() => {
    const actualTheme = store.getState().darkTheme;
    localStorage.setItem('theme', actualTheme ? 'dark' : 'light' );
});

export default store;
