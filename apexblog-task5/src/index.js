import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (!window.__reactAppMounted) {
  window.__reactAppMounted = true;
  const container = document.getElementById('root');
  if (container) {
    ReactDOM.render(<App />, container);
  } else {
    console.error("Root element not found");
  }
}