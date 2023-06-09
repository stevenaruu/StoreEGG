
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { BalanceSlice } from '../features/BalanceSlice'
import { MyProductSlice } from '../features/MyProductSlice'

const rootReducer = combineReducers({
    balance: BalanceSlice.reducer,
    product: MyProductSlice.reducer
});

const persistedReducer = persistReducer(
    {
        key: 'root',
        storage
    },
    rootReducer,
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
