import { RootState } from '@store';

export const getIsAuth = (state: RootState) => state.user.isAuth;
