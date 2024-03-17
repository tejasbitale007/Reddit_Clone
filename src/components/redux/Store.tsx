import { configureStore } from "@reduxjs/toolkit";
import { globalStore } from "./StorageInterface";
import globalSliceReducer from "./GlobalSlice";
import { HomeScreen } from "../modules/HomeScreen/redux/StorageInterfce";
import HomeSliceReducer from "../modules/HomeScreen/redux/HomeSlice";

export interface Store{
    authentication:globalStore,
    HomeScreen:HomeScreen
}

export const store = configureStore({
    reducer:{
            authentication:globalSliceReducer,
            HomeScreen:HomeSliceReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck:false
    }).concat([]),
})
