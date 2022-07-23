import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    back:false,
}
const commonSlice = createSlice({
    name:'common',
    initialState,
    reducers:{
        setHeaderBackToggle : (state, action) => {
            state.back = !state.back;
        },
        setActiveUrl : (state, action) => {
            state.url = action.url
        }
    }
})

export const  { setActiveUrl, setHeaderBackToggle} = commonSlice.actions;

export default commonSlice;