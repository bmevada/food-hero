// TO DO - REVIEW BEFORE REMOVING???

import React, { Component } from "react";

export default class ProductTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    gotoCustomizationPage = () => {
        console.log("go to customization")
    }

    render() {
        return (
            <div className={this.props.className} key={this.props.key}>
                <div className="product-position">
                    <img src={this.props.source} alt="#" />
                    <div className="title">{this.props.title}</div>
                    <div className="desc">{this.props.desc}</div>
                    <div className="price">{this.props.price}</div>
                    <div className="button">
                        <button onClick={this.gotoCustomizationPage}>{this.props.button}</button>
                    </div>
                </div>

            </div>
        )
    }

}