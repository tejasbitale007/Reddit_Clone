import { createSlice } from "@reduxjs/toolkit";
import { authentication, globalStore } from "./StorageInterface";
import { authenticationValidate } from "./asyncAction";

const initialState: globalStore = {
    authentication: {
        access_token: '',
        token_type: '',
        expires_in: 0,
        scope: ''
    }
}
export const globalSlice = createSlice({
    name: 'globalSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authenticationValidate.pending, (state) => {
            state.authentication = initialState.authentication;
        }),
        builder.addCase(authenticationValidate.fulfilled, (state, { payload }) => {
            state.authentication = payload;
        })
    }
})
export const {} = globalSlice.actions;
export default globalSlice.reducer