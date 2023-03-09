import { configureStore } from '@reduxjs/toolkit';
import category from '@store/category';
import { useDispatch } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const store = configureStore({
    reducer: {
        category,
    },
});

export default store;
