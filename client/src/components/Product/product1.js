import React, { Component } from "react";
import Button from "../Button/button1";

export default class ProductOne extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="individual-product-Comp">
				<div className="product-title">{this.props.title}</div>
				<img className="product-img" src={`${process.env.REACT_APP_SERVER_URL}/${this.props.source}`} width={'200px'} height={'200px'} style={{ borderRadius: '10px' }} alt="Home menu" />
				<div style={{ marginTop: '10px', fontSize: '25px', color: '#659B9B' }}><span>$ {this.props.price}</span></div>
				<div style={{ marginTop: '-40px' }}>
					<Button value={this.props.buttonValue} onClick={this.props.onClick} />
				</div>
			</div>
		)
	}
}