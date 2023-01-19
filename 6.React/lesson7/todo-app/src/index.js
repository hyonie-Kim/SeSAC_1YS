import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';

// reduxDevTool 이 툴이 있어야 Resux Dev Tools를 확인가능함
const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = configureStore({ reducer: rootReducer }, reduxDevTool);

// const store = configureStore({ reducer: rootReducer });

console.log(store.getState()); // 현재 내가 선언해 놓은 모든 리덕스 값을 확인할수 있음

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
