import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import colors from 'data/colors';
import './nav.css';

const Nav = ({ index, setIndex }) => {
    const history = useHistory();
    const handleClick = (i) => {
        setIndex(i);
        history.push('/' + colors[i][0].toLowerCase().replace(/\s/g, ''));
    }

    useEffect(() => {
        const renderLocation = window.location.pathname.split('/')[1];
        colors.forEach((page, i) => {
            if (page[0].toLowerCase().replace(/\s/g, '') === renderLocation) setIndex(i);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const color = colors[index][1];

    return (
        <div className="nav">
            <span className={"line lighten-3 " + color} />
            {colors.map((_, i) => (
                <span 
                    key={"circle" + i}
                    className={clsx('circle darken-1', (index === i) && 'pulse', (index === i) && color)} 
                    onClick={() => handleClick(i)}  
                />
            ))}
            <p className="title">{ colors[index][0] }</p>
        </div>
    )
};

export default Nav;