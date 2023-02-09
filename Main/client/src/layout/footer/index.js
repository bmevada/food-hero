import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from "../../assets/img/logo.png"
class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-content'>
                    <div className='footer-logo'><img src={FooterLogo} alt="Footer Logo" height={'50px'} /></div>

                    <div className='individual-detail'>
                        <div><Link className='detail-title' to="/">About Us</Link></div>
                    </div>

                    <div className='individual-detail'>
                        <div><Link className='detail-title' to="/about_us">Franchising Opportunities</Link></div>
                    </div>
                    <div className='individual-detail'>
                        <div><Link className='detail-title' to="/about_us">Nutritional Infomation</Link></div>
                    </div>

                    <div className='individual-detail'>
                        <div><Link className='detail-title' to="/about_us">About the Founder</Link></div>
                    </div>

                </div>

            </div>
        )
    }

}

export default Footer;