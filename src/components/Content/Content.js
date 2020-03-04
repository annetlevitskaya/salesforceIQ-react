import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
    render() {
        const contetnRight = [
            {
                title: 'Manage Your Opportunities Without the Data Entry',
                text: 'SalesforceIQ automatically updates itself with relevant information from your prospect and customers communications',
                link: 'Check out our automation'
            },
            {
                title: 'Manage Your Opportunities Without the Data Entry',
                text: 'SalesforceIQ automatically updates itself with relevant information from your prospect and customers communications',
                link: 'Check out our automation'
            }
        ]

        return (
            <div className="content">
                {contetnRight.map(info => {
                    return(
                        <div className="content__row-right">
                            <div className="content__text_box">
                                <div className="content__text_caption">
                                    {info.title}
                                </div>
                                <div className="content__text_description">
                                    {info.text}
                                </div>
                                <a href="/#" className="content__text_link">
                                    {info.link}
                                </a>
                            </div>
                            <div className="content__img"></div>
                        </div>
                    )
                })}
                <div className="content__row-left">
                    <div className="content__img"></div>
                    <div className="content__text_box">
                        <div className="content__text_caption">Understand a Customer In Depth Without the Run-Around</div>
                        <div className="content__text_description">Know everything about your customer interactions with one click, from their last touchpoint to your opportunity to follow-up</div>
                        <a href="/#" className="content__text_link">See everything together</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;
