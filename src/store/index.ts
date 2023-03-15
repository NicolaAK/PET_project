import { configureStore } from '@reduxjs/toolkit';
import category from '@store/category';
import user from '@store/user';
import { useDispatch } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const store = configureStore({
    reducer: {
        category,
        user,
    },
});

export default store;
