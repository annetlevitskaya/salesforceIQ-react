import React, { Component } from 'react';
import './Download.css';

export default class Download extends Component {
    render() {
        const buttons = [
            {
                img: '../apple.svg',
                title: 'IOS App',
                alt: 'ios'
            },
            {
                img: '../android-logo.svg',
                title: 'Andrioid App',
                alt: 'android'
            },
            {
                img: '../chrome.svg',
                title: 'Chrome Extension',
                alt: 'chrome'
            }
        ]

        return (
            <div className="download">
                <div className="download__question">Are you Sales Cloud user? Download our free apps</div>
                <div className="download__caption">Sell Smarter with SalesforceIQ</div>
                <div className="download__buttons_box">
                {buttons.map(button => {
                    return(
                        <button className="download__btn">
                            <img src={button.img} alt={button.alt} className="download__btn_img" />
                            <span className="download__btn_text">
                                {button.title}
                            </span>
                        </button>
                    )
                })}
                    {/* <button className="download__btn">
                        <img src="../apple.svg" alt="ios" className="download__btn_img" />
                        <span className="download__btn_text">IOS App</span>
                    </button> */}
                    {/* <button className="download__btn">
                        <img src="../android-logo.svg" alt="android" className="download__btn_img" />
                        <span className="download__btn_text">Andrioid App</span>
                    </button>
                    <button className="download__btn">
                        <img src="../chrome.svg" alt="chrome" className="download__btn_img" />
                        <span className="download__btn_text">Chrome Extension</span>
                    </button> */}
                </div>
            </div>
        )
    }
}