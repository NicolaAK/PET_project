import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
};

const User = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload;
        },
    },
});

export const { setAuth } = User.actions;

export default User.reducer;
