import React, { useState } from 'react';

import Background from '../../background';
import colors from 'data/colors';
import './signup.css';

const Signup = () => {
    const [showForm, setShowForm] = useState(false);

    const color = colors[2][1];

    const handleSubmit = () => {

    }

    return (
        <>
            <div className="signup parent">
                {showForm ? (
                    <div className="container valign-wrapper">
                        <div className={"bubble lighten-4 " + color}>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <h2>Sign up for workshop</h2>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="email" className="validate" name="email" type="email" autoComplete="off" />
                                        <label htmlFor="email" >Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="first" className="validate" name="first" type="text" autoComplete="off" />
                                        <label htmlFor="first">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="last" className="validate" name="last" type="text" autoComplete="off" />
                                        <label htmlFor="last">Last Name</label>
                                    </div>
                                </div>
                                <p class="range-field">
                                    <input type="range" id="grade" min="1" max="8" />
                                </p>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="opening">
                        <h1>So what are you waiting for?</h1>
                        <div className="signup-link">
                            <span>Signup for a workshop now</span>
                            <button 
                                className="btn-floating btn-small waves-effect waves-light red accent-2"
                                onClick={() => setShowForm(true)}
                            >
                                <i className="material-icons">chevron_right</i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Background color={color} cube />
        </>
    )
};

export default Signup;