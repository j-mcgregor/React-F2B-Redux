// Root Reducer
import { combineReducers } from 'redux';
import contactReducer from './contactReducer';

// Then you bring in all the reducers you want. Each resource should have 1 reducer
export default combineReducers({
  // when you bring in your application-leve state from redux into a component its going to be available in the props. You can see the below in the redux dev tools
  contact: contactReducer
});