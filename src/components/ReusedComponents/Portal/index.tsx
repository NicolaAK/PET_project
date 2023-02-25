import React, { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal: FC<{ className?: string }> = ({ children, className = '' }) => {
    const [container] = React.useState(document.createElement('div'));

    if (className?.length) {
        container.classList.add(...className.split(' '));
    }

    useEffect(() => {
        document.body.appendChild(container);

        return () => {
            document.body.removeChild(container);
        };
    }, [container]);

    return createPortal(children, container);
};

export default Portal;
