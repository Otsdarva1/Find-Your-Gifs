import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));
console.log(store.getState);
// const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
