// import React, { Component } from 'react';
// import Header from './layout/Header';
// import Footer from './layout/Footer';
// import Cart from './layout/Cart/cart';

// class Layout extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {

//         }
//     }

//     render() {
//         return <div className='layout'>
//             <Header />
//             <div className='content'>
//                 {this.props.children}
//             </div>
//             <Cart />
//             <Footer />

//         </div>;
//     }
// }

// export default Layout;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();