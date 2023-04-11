import { createStore, compose, applyMiddleware  } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';

let composeEnhancers = compose;

if( window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})

const store = createStore(rootReducer,{}, composeEnhancers(applyMiddleware(thunk)));

export default store;  