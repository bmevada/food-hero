// import './App.scss';
// import React from 'react';
// import Routing from './routes';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from '.'
// import axios from 'axios'

// axios.defaults.baseURL = "http://localhost:4000"

// function App() {

//   return (
//     <div className="App">
//       <Router>
//         <Layout>
//           <Routing />
//         </Layout>
//       </Router>
//     </div>
//   );
// }

// export default App;


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

export default App;