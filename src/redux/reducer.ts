import { TOGGLE_THEME } from './constants';


// Web Storage is an API to store data in the browser
// localStorage persists data value as string
// theme expects three values: 'light' or 'dark' or null
const storedTheme = localStorage.getItem('theme') === 'dark';

const initialState: InitialState = {
    darkTheme: storedTheme
};

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return { ...state, darkTheme: !state.darkTheme };

        default:
            return state;
    }
};

export default reducer;
