import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
    },
    reducers:{
        login:(state,action)=>{
            state.user.value = action.payload;
        },
        logOut:(state)=>{
            state.user.value=null
        }
    }
})
export const {login,logOut} = userSlice.actions;
export const selectUser = state=>state.user.user;
export default userSlice.reducer;