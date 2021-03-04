import React from 'react';
import Typing from 'react-typing-animation';

import Background from '../../background';
import colors from 'data/colors';
import './hero.css';

const Hero = () => {
    const speed = 50;
    return (
        <>
            <div className="hero parent">
                <Typing speed={speed} startDelay={200}>
                    <h1>CODE</h1>
                    <h1>FUTURE</h1>
                </Typing>
            </div>
            <Background color={colors[0][1]} cube />
        </>
    )
};

export default Hero;