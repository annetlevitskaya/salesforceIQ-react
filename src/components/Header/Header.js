import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="container">
                    <div className="Header__navigation">
                        <div className="Header__logo">
                            <img src="../code.svg" className="Header__logo_img" alt="logo"/>
                            <span className="Header__logo_text">salesforceIQ</span>
                        </div>
                        <button className="Header__login">Sign In</button>
                    </div>
                    <h1 className="Header__caption">
                        Smarter Selling, Better Relationships
                    </h1>
                    <div className="Header-trial">
                        <span className="Header-trial__text">
                            Supercharge Your Sales Team with Relationship Intelligence
                        </span>
                        <button className="Header-trial__btn">
                            Start 14-Day Trial
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}