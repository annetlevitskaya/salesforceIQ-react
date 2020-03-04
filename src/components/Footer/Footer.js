import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <nav className="footer__menu">
                        <a href="#" className="footer__menu_item">Company</a>
                        <a href="#" className="footer__menu_item">Contact</a>
                        <a href="#" className="footer__menu_item">Jobs</a>
                        <a href="#" className="footer__menu_item">Pricing</a>
                        <a href="#" className="footer__menu_item">Security</a>
                        <a href="#" className="footer__menu_item">Status</a>
                    </nav>
                    <div className="footer__text">
                        <div className="footer__text_item">&copy; 2012-2015 SalesforceIQ (formerly RelateIQ)</div>
                        <a href="#" className="footer__text_link">Terms of Service</a>
                        <a href="#" className="footer__text_link">Private Policy</a>
                    </div>
                </div>
            </footer>
        )
    }
}