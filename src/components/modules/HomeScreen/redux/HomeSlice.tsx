import { createSlice } from "@reduxjs/toolkit";
import { HomeScreen } from "./StorageInterfce";
import { fetchListing, fetchNewListing, fetchTopListing } from "./asyncAction";

const initialState : HomeScreen = {
    loading:false,
    bestData:{
        kind:'',
        data:{
            after: "",
            dist: 0,
            modhash: undefined,
            geo_filter: undefined,
            children: [],
            before: undefined
        }
    }
}

export const HomeSlice = createSlice({
    name:'HomeScreen',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchListing.pending,(state)=>{
            state.loading =  true ;
        })
        builder.addCase(fetchListing.fulfilled,(state,{payload})=>{
            state.loading = false ;
            state.bestData = payload;
        });
        builder.addCase(fetchListing.rejected,(state)=>{
            state.loading = false
        });
        builder.addCase(fetchTopListing.pending,(state)=>{
            state.loading = true
        });
        builder.addCase(fetchTopListing.fulfilled,(state,{payload})=>{
            state.loading = false;
            state.topData = payload;
        });
        builder.addCase(fetchNewListing.pending,(state)=>{
            state.loading = true
        });
        builder.addCase(fetchNewListing.fulfilled,(state,{payload})=>{
            state.loading = false;
            state.newData = payload;
        })
    }
})
export const {} = HomeSlice.actions;
export default HomeSlice.reducer