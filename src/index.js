import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducres/rootReducer';

const middlewareEnhancer = applyMiddleware(thunk);
const composedEnhancers = composeWithDevTools(...[middlewareEnhancer])
const store = createStore(rootReducer, composedEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
