import React from 'react';
import Cube from './Cube';

import cubes from 'data/cubes';
import './background.css';

const Background = ({ color, cube }) => {
    return (
        <div className={'background valign-wrapper lighten-1 ' + color}>
            {cube && cubes.map(cube => (
                <Cube left={cube[0]} top={cube[1]} scale={cube[2]} color={color} />
            ))}
        </div>
    )
};

export default Background;