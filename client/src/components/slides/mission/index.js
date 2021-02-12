import React from 'react';

import './mission.css';

const Mission = () => {
        return (
            <div className="mission">
                <div className="container valign-wrapper">
                    <div className="row">
                        <div className="col s12 m4 heading">
                            <h1>Our Mission</h1>
                            <span className="grad-line" />
                        </div>
                        <div className="col s12 m6 push-m2">
                            <p>
                                We want to make computer science topics just as easy to access as math 
                                and science classes in early schooling by creating fun experiences to 
                                teach basic programming concepts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Mission;