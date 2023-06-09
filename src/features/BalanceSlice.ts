import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from "../redux/redux";

interface BalanceState {
    balance: number;
}

const initialState: BalanceState = {
    balance: 2500,
};

export const BalanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        ADD_BALANCE: (state: any, action: PayloadAction<number>) => {
            state.balance += action.payload
        },
        MIN_BALANCE: (state: any, action: PayloadAction<number>) => {
            state.balance -= action.payload
        },
    },
});

export const { ADD_BALANCE, MIN_BALANCE } = BalanceSlice.actions;
export const selectBalance = (state: RootState) => state.balance.balance;