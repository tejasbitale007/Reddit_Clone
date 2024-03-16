import { configureStore } from "@reduxjs/toolkit";
import { globalStore } from "./StorageInterface";
import globalSliceReducer from "./GlobalSlice";

export interface Store{
    authentication:globalStore
}

export const store = configureStore({
    reducer:{
            globalSlice:globalSliceReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck:false
    }).concat([]),
})
