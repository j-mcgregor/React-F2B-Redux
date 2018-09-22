// createStore initialised the store, applyMiddleware does just that, compose let's you run multiple things concurrently
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// initial state
const initialState = {};

// Middleware
const middleware = [thunk];

// Bringing it all together with the Redux Dev tools
const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(...middleware)
));

export default store;