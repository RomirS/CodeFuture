import React from 'react';

import './workshops.css';
//workshops -Edward Kang
const Workshops = () => {
    return (
        <div className="workshops">
            <div className="workshops opening">
              {/* center workshops title*/} 
                <div className="workshops card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="src/assets/workshops/intromaze.png" alt="failed to load"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Introduction to Scratch<i className="material-icons right">more_vert</i></span>
                    <p><a href="#!">Sign up through this link!</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Introduction to Scratch<i className="material-icons right">close</i></span>
                        <p>Want to learn the basics of game development? This workshop covers the Scratch programming interface, basic sprite movements, and a maze to top it off while teaching computer science fundamentals.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Workshops;