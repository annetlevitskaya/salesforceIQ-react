import React, { Component } from 'react';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navigation">
                <img src="../code.svg" alt="logo" className="navigation__logo"/>
                <div className="navigation__list">
                    <div className="navigation__list_item">How It Works</div>
                    <div className="navigation__list_item">Customers</div>
                    <div className="navigation__list_item">Resources</div>
                    <div className="navigation__list_item">Blog</div>
                </div>
                <div className="navigation__login_box">
                    <a href="/#" className="navigation__login">Sign In</a>
                    <button className="navigation__sign">Sign Up Free</button>
                </div>
            </nav>
        )
    }
}