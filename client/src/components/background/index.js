import React from 'react';
import Cube from './Cube';
import CubeRotate from './CubeRotate';

import cubes from 'data/cubes';
import './background.css';

const Background = ({ color, cube, rotate }) => {
    return (
        <div className={'background valign-wrapper lighten-1 ' + color}>
            {cube && !rotate && cubes.map((cube, i) => (
                <Cube left={cube[0]} top={cube[1]} scale={cube[2]} color={color} key={'cube' + i} />
            ))}
            {cube && rotate && (
                <CubeRotate color={color} scale={4} />
            )}
        </div>
    )
};

export default Background;