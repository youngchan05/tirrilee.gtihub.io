import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    url:'',
}
const commonSlice = createSlice({
    name:'common',
    initialState,
    reducers:{
        setActiveUrl : (state, action) => {
            state.url = action.url
        }
    }
})

export const  { setActiveUrl} = commonSlice.actions;

export default commonSlice;