import { useEffect, useRef } from 'react';

const useClickOutside = (onClick: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClick();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onClick]);

    return ref;
};

export default useClickOutside;
