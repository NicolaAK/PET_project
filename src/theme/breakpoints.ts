import theme from '@theme/index';
import { useMediaQuery } from 'react-responsive';

export enum BREAKPOINTS_ENUM {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    ld = 'ld',
    xl = 'xl',
    xxl = 'xxl',
}

export default {
    [BREAKPOINTS_ENUM.xs]: '(max-width: 375px)',
    [BREAKPOINTS_ENUM.sm]: '(max-width: 576px)',
    [BREAKPOINTS_ENUM.md]: '(max-width: 767px)',
    [BREAKPOINTS_ENUM.ld]: '(max-width: 992px)',
    [BREAKPOINTS_ENUM.xl]: '(max-width: 1200px)',
    [BREAKPOINTS_ENUM.xxl]: '(max-width: 1400px)',
};

export const useMediaHook = () => {
    const isSm = useMediaQuery({ query: theme.breakpoints.sm });
    const isMd = useMediaQuery({ query: theme.breakpoints.md });
    const isLd = useMediaQuery({ query: theme.breakpoints.ld });
    const isXl = useMediaQuery({ query: theme.breakpoints.xl });
    const isXxl = useMediaQuery({ query: theme.breakpoints.xxl });

    return { isSm, isMd, isLd, isXl, isXxl };
};
