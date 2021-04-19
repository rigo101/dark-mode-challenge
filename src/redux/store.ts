import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const store = createStore(reducer, composeWithDevTools());

store.subscribe(() => {
    const actualTheme = store.getState().darkTheme;
    localStorage.setItem('theme', actualTheme ? 'dark' : 'light' );
});

export default store;
