import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hero from './slides/hero';
import Mission from './slides/mission';
import Signup from './slides/signup';
import Nav from './nav';

const App = () => {
    const [index, setIndex] = useState(0);
    const slides = [Hero, Mission, Signup];
    const slideNames = ['Home', 'Mission', 'Signup'];

    return (
        <BrowserRouter>
            <div className="app-container">
                <Switch>
                    <Route exact path='/' component={Hero} />
                    {slides.map((Slide, i) => (
                        <Route key={'slide' + i} exact path={'/' + slideNames[i]} component={Slide} />
                    ))}
                </Switch>
                <Nav slideNames={slideNames} index={index} setIndex={setIndex} />
            </div>
        </BrowserRouter>
    )
}

export default App;
