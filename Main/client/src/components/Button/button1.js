import './button1'
import React, { Component } from "react";

export default class ButtonOne extends Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<div className="button">
				<button
					style={{
						width: this.props.width ? this.props.width : undefined
					}}
					className={this.props.Class}
					onClick={this.props.onClick}
					disabled={this.props.status}
				>
					{this.props.value}
				</button>
			</div>
		)
	}
}