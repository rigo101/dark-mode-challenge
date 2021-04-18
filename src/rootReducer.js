import { TOGGLE_THEME } from './constants';

const rootReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return { ...state, darkTheme: !state.darkTheme };

        default:
            return state;
    }
};

export default rootReducer;
