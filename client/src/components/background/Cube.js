import React from 'react';
import useMousePosition from 'helpers/useMousePosition';
import useWindowSize from 'helpers/useWindowSize';

const faces = ['front darken-1', 'back darken-4', 'left darken-2', 'right darken-2', 'top', 'bottom darken-3'];

const Cube = ({ left, top, scale, color }) => {
    const { x, y } = useMousePosition();
    const { width, height } = useWindowSize();

    const scaleAmount = width > 500 ? scale : width/150;
    const rotateAmount = 20;
    const transformScale = 10;

    const radius = 50; //cube size / 2
    const center = {
        x: width/2,
        y: height/2
    }
    const xrotate = -1 * (y - center.y)/height * rotateAmount;
    const yrotate = (x - center.x)/width * rotateAmount;

    const xtransform = radius - transformScale * radius * (x - center.x)/width;
    const ytransform = radius - transformScale * radius * (y - center.y)/height;

    const cubeStyle = {
        top: `${height/2 - 50}px`,
        left: `${width/2 - 50}px`,
        transform: `scale(${scaleAmount})`
    }

    const cubeWrapperStyle = {
        transform: `rotateX(${xrotate}deg) rotateY(${yrotate}deg)  translateZ(-50px)`,
        transformOrigin: `${xtransform}px ${ytransform}px`
    };

    return (
        <div className="cube" style={cubeStyle}>
            <div className="cube-wrapper" style={cubeWrapperStyle}>
                {faces.map(face => (
                    <div className={`cube-face ${color} ${face}`} key={face} />
                ))}
            </div>
        </div>
    )
}

export default Cube;