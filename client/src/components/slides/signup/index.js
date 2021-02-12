import React from 'react';

import './signup.css';

const Signup = () => {
    return (
        <div className="signup">
            <div className="semicircle" />
            <div className="opening">
                <h1>So what are you waiting for?</h1>
                <div className="signup-link">
                    <span>Signup for a workshop now</span>
                    <a className="btn-floating btn-small waves-effect waves-light red accent-2" href="/workshops">
                        <i className="material-icons">chevron_right</i>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Signup;