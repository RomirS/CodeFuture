import React from 'react';

import Cube from './Cube';
import './hero.css';

const Hero = () => {
        return (
            <div className="hero">
                <h1 className="typewriter" id="code">CODE</h1>
                <h1 className="typewriter" id="future">FUTURE</h1>
                <Cube />
            </div>
        )
};

export default Hero;