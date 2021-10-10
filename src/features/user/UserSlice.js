import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:"",
    email:"",
    photo:""
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserLogin:(state,action)=>{
            state.name=action.payload.name
            state.email=action.payload.email
            state.photo=action.payload.photo
        },
        setSignout:(state)=>{
            state.name=null
            state.email=null
            state.photo=null
        }
    }
})

export const {setSignout,setUserLogin}=userSlice.actions;
export default userSlice.reducer
export const selectName=(state)=>state.user.name 
export const selectEmail=(state)=>state.user.email
export const selectPhoto=(state)=>state.user.photo 