import React, { Component } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Btn extends Component {
  constructor() {
    super();

    this.state = {
      click: false
    }
  }

  onBtnDown = () => {
    this.setState({
      click: true
    })
  }

  onBtnUp = () => {
    this.setState({
      click: false
    })
  }

  render() {
    const { click } = this.state;

    return <div className="custom-btn" onMouseDown={this.onBtnDown} onMouseUp={this.onBtnUp}>
            {
              click ? <LazyLoadImage
                        alt={this.props.clicked.alt}
                        src={this.props.clicked.src}
                      /> : <LazyLoadImage
                        alt={this.props.click.alt}
                        src={this.props.click.src}
                      />
            }
          </div>;
  }
}

export default Btn;