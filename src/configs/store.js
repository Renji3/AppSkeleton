/** Important Imports for redux **/
import { applyMiddleware, createStore } from "redux";
import { persistReducer } from "redux-persist"

import { composeWithDevTools } from 'redux-devtools-extension';

/*  Middleware, that does stuff with the actions before it passes them
    to the reducers */
import thunk from "redux-thunk"; // Allows async functions to be put into the Actions
import promiseMiddleware from "redux-promise"; //Allows you to handle Promises better like AsyncStorage

import persistStoreConfig from './persistStoreConfig.js';

// My own Reducers combined into .reducers/index.js
import reducer from "../reducers"

import getMiddlewareList from "../getMiddlewareList.js"

export const middleWareArgs = [thunk, promiseMiddleware].concat(getMiddlewareList());
export const middleWareArgsTesting = [thunk, promiseMiddleware];
const middleware = applyMiddleware(...middleWareArgs);

const persistedReducer = persistReducer( persistStoreConfig, reducer );
//Exports the store

function getComposer(middleware){
  if(__DEV__){
    console.log("RUNNING IN DEV MODE");
    return composeWithDevTools(middleware);
  }else{
    return middleware;
  }
}

export default createStore(persistedReducer, getComposer(middleware));
