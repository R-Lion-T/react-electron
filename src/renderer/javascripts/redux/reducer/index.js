import { combineReducers } from "redux"
import { dis_state } from './state';

const rootReducer = combineReducers({
    state:dis_state,
})

export default rootReducer