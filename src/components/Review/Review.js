import React, { Component } from 'react';
import './Review.css';

export default class Review extends Component {
    render() {
        const people = [
            {
                title: 'David Bergeron',
                job: 'T3 Advisors',
            },
            {
                title: 'Kenny Van Zant',
                job: 'Asana',
            },
            {
                title: 'Brandee Barker',
                job: 'The Pramana Collective',
            },
        ];

        return (
            <div className="review">
                <div className="container">
                    <img src="../left-quote.svg" alt="" className="review__img" />
                    <div className="review__caption">SalesforceIQ Tells Me How To Prioritize My Interactions With Leads In A Better, Smarter, More Cohesive Way</div>
                    <div className="review__people">
                        {people.map(person => {
                            return (
                                <div className="review__people_item">
                                    <div className="review__people_img"></div>
                                    <div className="review__people_text">
                                        <div className="review__people_text-caption">
                                            {person.title}
                                        </div>
                                        <div className="review__people_text-job">
                                            {person.job}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}