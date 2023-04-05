import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchProductListRequest } from '@store/product/http';
import { IProduct } from './types';

export const productAdapter = createEntityAdapter<IProduct>();

type InitialStateType = { isLoading: boolean[]; isInitialized: boolean };

const initialState = productAdapter.getInitialState<InitialStateType>({
    isLoading: [],
    isInitialized: false,
});

export const fetchProductList = createAsyncThunk<Array<IProduct>, void>('product/fetch', async () => {
    const { data } = await fetchProductListRequest();
    return data.data;
});

const Product = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // fetchMerchantById
        builder.addCase(fetchProductList.pending, (state) => {
            state.isLoading.push(true);
        });
        builder.addCase(fetchProductList.fulfilled, (state, { payload }) => {
            state.isLoading.pop();
            state.isInitialized = true;
            productAdapter.setAll(state, payload);
        });
        builder.addCase(fetchProductList.rejected, (state) => {
            state.isLoading.pop();
            state.isInitialized = true;
        });
    },
});

export default Product.reducer;
