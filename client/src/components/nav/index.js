import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import './nav.css';

const Nav = ({ slideNames, index, setIndex }) => {
    const history = useHistory();
    const handleClick = (index) => {
        setIndex(index);
        history.push('/' + slideNames[index].toLowerCase().replace(/\s/g, ''));
    }

    useEffect(() => {
        const renderLocation = window.location.pathname.split('/')[1];
        slideNames.forEach((name, i) => {
            if (name.toLowerCase().replace(/\s/g, '') === renderLocation) setIndex(i);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="nav">
            <span className="line" />
            {slideNames.map((_, i) => (
                <span className={clsx('circle', 'darken-2', (index === i) && 'pulse', (index === i) && 'grey')} onClick={() => handleClick(i)} key={"circle" + i} />
            ))}
            <p className="title">{ slideNames[index] }</p>
        </div>
    )
};

export default Nav;