import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hero from './slides/hero';
import Mission from './slides/mission';
import Signup from './slides/signup';
import Workshops from './slides/workshops';

import colors from 'data/colors';
import Nav from './nav';

const App = () => {
    const [index, setIndex] = useState(0);

    const slides = [Hero, Mission, Signup, Workshops];

    return (
        <BrowserRouter>
            <div className="app-container">
                <Switch>
                    <Route exact path='/' component={Hero} />
                    {slides.map((Slide, i) => (
                        <Route 
                            key={colors[i][0]} 
                            exact path={'/' + colors[i][0]} 
                            component={Slide}
                        />
                    ))}
                </Switch>
                <Nav index={index} setIndex={setIndex} />
            </div>
        </BrowserRouter>
    )
}

export default App;
