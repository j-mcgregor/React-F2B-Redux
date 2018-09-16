// createStore initialised the store, applyMiddleware does just that, compose let's you run multiple things concurrently
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// initial state
const initialState = {};

// Middleware
const middleware = [thunk];

// Bringing it all together with the Redux Dev tools
const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;