import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "../features/common/common";


export const store = configureStore  ({
    reducer:{
        common:commonSlice.reducer,
    },
})

