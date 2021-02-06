import React from 'react';
import clsx from 'clsx';

import './nav.css';

const Nav = ({ slides, index, setIndex }) => {
    return (
        <div className="nav">
            <span className="line" />
            {slides.map((_, i) => (
                <span className={clsx('circle', 'darken-2', (index === i) && 'pulse', (index === i) && 'grey')} onClick={() => setIndex(i)} key={"circle" + i} />
            ))}
        </div>
    )
};

export default Nav;