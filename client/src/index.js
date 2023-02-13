import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/redux/reducer/index'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENDION__&&
  window.__REDUX_DEVTOOLS_EXTENDION__()
)

render (
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();