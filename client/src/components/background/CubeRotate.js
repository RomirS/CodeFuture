import React from 'react';

const faces = ['front darken-1', 'back darken-1', 'left', 'right', 'top darken-2', 'bottom darken-2'];

const Cube = ({ scale, color }) => {

    const cubeStyle = {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%) scale(${scale})`
    }

    const cubeWrapperStyle = {
        transform: `rotateX(45deg) rotateZ(45deg) translateZ(0px)`
    };

    return (
        <div className="cube" style={cubeStyle}>
            <div className="floatwrap">
                <div className="spinwrap">
                    <div className="cube-wrapper" style={cubeWrapperStyle}>
                        {faces.map(face => (
                            <div className={`cube-face ${color} ${face}`} key={face} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cube;