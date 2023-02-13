import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Cart from './cart/cart';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return <div className='layout'>
      <Header />
      <div className='content'>
        {this.props.children}
      </div>
      <Cart />
      <Footer />

    </div>;
  }
}

export default Layout;