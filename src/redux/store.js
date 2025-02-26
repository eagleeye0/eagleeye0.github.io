// import React from "react";
// import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'


// const reducer = combineReducers({
//     key: "value",
// })

// let initialState = {
//     key: "value"
// }

// const middlware = [thunk];

// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)));
// export default store;


import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/brandAuthSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

