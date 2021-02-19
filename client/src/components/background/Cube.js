import React from 'react';
import useMousePosition from 'helpers/useMousePosition';
import useWindowSize from 'helpers/useWindowSize';

const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];

const Cube = ({ left, top, scale, color }) => {
    const { x, y } = useMousePosition();
    const { width, height } = useWindowSize();

    const scaleAmount = scale;
    const rotateAmount = 40;
    const transformScale = 3;

    const radius = 50; //cube size / 2
    const center = {
        x: left + radius,
        y: top + radius
    }
    const xrotate = -1 * (y - center.y)/height * rotateAmount;
    const yrotate = (x - center.x)/width * rotateAmount;

    const xtransform = radius - transformScale * radius * (x - center.x)/width;
    const ytransform = radius - transformScale * radius * (y - center.y)/height;

    const cubeStyle = {
        top: `${top}px`,
        left: `${left}px`,
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
                    <div className={`cube-face ${color} darken-3 ${face}`} key={face} />
                ))}
            </div>
        </div>
    )
}

export default Cube;