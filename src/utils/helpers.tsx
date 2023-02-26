import { ROUTES } from '../routes/constants';

export const pipe = (arg: any, ...fns: Array<Function>) => fns.reduce((prev, fn) => fn(prev), arg);
export const generateGithubPagesRoutes = (route: string) => `/${ROUTES.YANKI}/${route}`;
