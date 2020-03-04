import React, { Component } from 'react';
import './Already.css';

export default class Already extends Component {
    render() {
        return (
            <div className="already">
                <span className="already__text">Already a Salesforce customer? Get</span>
                <a href="/#" className="already__link">SalesforceIQ for Sales Cloud</a>
            </div>
        )
    }
}