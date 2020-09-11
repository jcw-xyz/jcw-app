import { combineReducers } from 'redux';
import { wsReducer } from './ws/wsReducer';

export const rootReducer = combineReducers({
    ws: wsReducer,
});
