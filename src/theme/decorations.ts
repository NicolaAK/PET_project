const decorations = {
    borderRadius: {
        base: 4,
    },
    boxShadow: {
        default: {
            xs: '1px 2px 4px rgba(0, 0, 0, 0.1)',
            s: '2px 4px 8px rgba(0, 0, 0, 0.1)',
            m: '4px 8px 16px rgba(0, 0, 0, 0.1)',
            l: '8px 16px 32px rgba(0, 0, 0, 0.1)',
            xl: '16px 32px 64px rgba(0, 0, 0, 0.1)',
        },
        primary: {
            xs: '1px 2px 4px rgba(255, 102, 51, 0.2)',
            s: '2px 4px 8px rgba(255, 102, 51, 0.2)',
            m: '4px 8px 16px rgba(255, 102, 51, 0.2)',
            l: '8px 16px 32px rgba(255, 102, 51, 0.2)',
            xl: '16px 32px 64px rgba(255, 102, 51, 0.2)',
        },
        secondary: {
            xs: '1px 2px 4px rgba(112, 192, 91, 0.2)',
            s: '2px 4px 8px rgba(112, 192, 91, 0.2)',
            m: '4px 8px 16px rgba(112, 192, 91, 0.2)',
            l: '8px 16px 32px rgba(112, 192, 91, 0.2)',
            xl: '16px 32px 64px rgba(112, 192, 91, 0.2)',
        },
    },
    transition: {
        base: 'all .2s ease-in-out',
    },
};

export default decorations;
