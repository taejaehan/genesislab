import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"; 
import { Provider } from "react-redux"; 
import rootReducer from "./modules"; 
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './res/App.scss';

// const store = createStore(rootReducer); 
const store = createStore(rootReducer, composeWithDevTools()); 
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}> 
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);