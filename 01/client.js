import React from 'react';
import ReactDOM from 'react-dom';
import Router from './core/Router.js';

function run() {
  const component = Router.match({
    path: window.location.pathname
  })
  // to hydrate a container whose HTML contents were rendered by ReactDOMServer(in server.js)
  ReactDOM.hydrate(component, document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) { // when completely loaded HTML page in browser
  run();
} else {
  window.addEventListener('DOMContentLoaded', event => {
    run();
    console.log('DOM fully loaded and parsed');
  }, false);
}
