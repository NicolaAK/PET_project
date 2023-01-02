export enum BREAKPOINTS_ENUM {
    sm = 'sm',
    md = 'md',
    ld = 'ld',
    xl = 'xl',
    xxl = 'xxl',
}

export default {
    [BREAKPOINTS_ENUM.sm]: '(max-width: 576px)',
    [BREAKPOINTS_ENUM.md]: '(max-width: 767px)',
    [BREAKPOINTS_ENUM.ld]: '(max-width: 992px)',
    [BREAKPOINTS_ENUM.xl]: '(max-width: 1200px)',
    [BREAKPOINTS_ENUM.xxl]: '(max-width: 1400px)',
};
