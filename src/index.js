// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- Use 'react-dom/client'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

// Create the root element and render your app
const root = ReactDOM.createRoot(document.getElementById('root')); // <-- Updated rendering method

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
