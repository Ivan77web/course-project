import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegestrationModalSchema } from '../types/RegestrationModalSchema';

const initialState: RegestrationModalSchema = {};

export const RegestrationModalSlice = createSlice({
    name: 'RegestrationModal',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => { },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: RegestrationModalActions } = RegestrationModalSlice;
export const { reducer: RegestrationModalReducer } = RegestrationModalSlice;
