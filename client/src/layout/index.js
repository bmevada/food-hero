import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart/cart';

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