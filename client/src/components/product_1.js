// TO DO - REVIEW BEFORE REMOVING???
import React, { Component } from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default class ProductOne extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className={this.props.className} key={this.props.key}>
                <div className="product-position">
                    <img src={this.props.source} alt="#" />
                    <div className="title-button">
                        <div className="title">{this.props.title}</div>
                        <div className="button">
                            <button>{this.props.button}<IoMdArrowDropright size={35} /></button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}