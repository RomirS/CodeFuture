import React from 'react';

import Background from '../../background';
import colors from 'data/colors';
import './hero.css';
//import Cube from './Cube.js';

const Hero = () => {
    return (
        <>
            <div className="hero parent">
                <h1 className="typewriter" id="code">CODE</h1>
                <h1 className="typewriter" id="future">FUTURE</h1>
            </div>
            <Background color={colors[0][1]} cube />
        </>
    )
};

export default Hero;