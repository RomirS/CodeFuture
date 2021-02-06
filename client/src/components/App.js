import React, { useState, useEffect } from 'react';

import Hero from './slides/hero';
import Mission from './slides/mission'
import Nav from './nav';

const App = () => {
    const [index, setIndex] = useState(0)
    const slides = [Hero, Mission];

    useEffect(() => {
        console.log(index);
    });

    return (
        <div className="app-container">
            {slides.map((Slide, i) => (
                <div style={{ display: index === i ? "block" : "none" }}>
                    <Slide key={'slide' + i} />
                </div>
            ))}
            <Nav slides={slides} index={index} setIndex={setIndex} />
        </div>
    )
}

export default App;
