import {combineReducers} from 'redux';
import userReducer from '../Redux/user-reducer/user.reducer'

export default combineReducers({
    user:userReducer
});