import {uiReducer} from "./uiReducer";
import {combineReducers} from 'redux';
import {calendarReducer} from "./calendarReducer";
import {authReducer} from "./authReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    auth: authReducer
});