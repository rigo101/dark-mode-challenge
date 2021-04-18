import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const UI_Interface = {
    darkTheme: false
};

const store = createStore(rootReducer, UI_Interface, composeWithDevTools());

export default store;
