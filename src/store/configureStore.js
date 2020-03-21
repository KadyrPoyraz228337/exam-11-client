import {createBrowserHistory} from "history";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import usersReducer from "./reducers/usersReducer";
import {loadFromLocalStorage, localStorageMiddleware} from "./localStorage";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  users: usersReducer,
});

const middleware = [
  thunk,
  routerMiddleware(history),
  localStorageMiddleware
];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

export const store = createStore( rootReducer, persistedState, enhancers );

export default store;