import { useState, useEffect } from 'react';

const Animate = ({ into, out, show, children, addStyles }) => {
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
        if (show) setRender(true);
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setRender(false);
    };

    return (
        shouldRender && (
            <div
                style={{ ...addStyles, animation: `${show ? into : out} 0.4s` }}
                onAnimationEnd={onAnimationEnd}
            >
                {children}
            </div>
        )
    );
};

export default Animate;