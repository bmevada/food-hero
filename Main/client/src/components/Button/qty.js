import './qty.scss'
import React, { Component } from 'react';

export default class Quantity extends Component {
    constructor(props) {
        super(props);

        this.state = { value: 1 }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.props.onChange(1);
    }

    increment() {
        this.setState({ value: this.state.value + 1 });
        this.props.onChange(this.state.value + 1);
    }

    decrement() {
        this.state.value > 1 && this.setState({ value: this.state.value - 1 });
        if(this.state.value === 1){
            this.props.onChange(1);
        } else {
            this.props.onChange(this.state.value - 1);
        }
    }

    render() {

        return (
            <div className="quantity-input">
                <button className="quantity-input__modifier quantity-input__modifier--left" onClick={this.decrement}>
                    &#10094;
                </button>
                <input className="quantity-input__screen" type="text" value={this.state.value} readOnly />
                <button className="quantity-input__modifier quantity-input__modifier--right" onClick={this.increment}>
                    &#10095;
                </button>
            </div>
        );
    }
}