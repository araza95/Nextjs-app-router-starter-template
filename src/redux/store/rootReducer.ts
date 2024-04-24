import { combineReducers } from 'redux';
import authReducer from '../slices/authentication.slice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
