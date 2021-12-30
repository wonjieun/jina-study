import '@babel/register';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

function run() {
  // to hydrate a container whose HTML contents were rendered by ReactDOMServer(in server.js)
  ReactDOM.hydrate(<App />, document.getElementById('app'));
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
