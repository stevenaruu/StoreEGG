import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from "../redux/redux";
import { IProduct } from '../interfaces/IProduct';

interface MyProductState {
    listProduct: IProduct[];
}

const initialState: MyProductState = {
    listProduct: [],
};

export const MyProductSlice = createSlice({
    name: 'myproduct',
    initialState,
    reducers: {
        BUY_PRODUCT: (state: any, action: PayloadAction<IProduct>) => {
            state.listProduct.push(action.payload);
        },
        SELL_PRODUCT: (state: any, action: PayloadAction<IProduct>) => {
            state.listProduct = state.listProduct.filter((product: IProduct) => product.id !== action.payload.id);
        }
    },
});

export const { BUY_PRODUCT, SELL_PRODUCT } = MyProductSlice.actions;
export const selectProduct = (state: RootState) => state.product.listProduct;