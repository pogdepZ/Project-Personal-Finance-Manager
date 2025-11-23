import { createSlice } from "@reduxjs/toolkit";


const log = localStorage.getItem('isLogin')
const isLog = log ? JSON.parse(log) : false

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLogin: isLog
    },
    reducers: {
        toLogin: (state)=>{
            state.isLogin = true;
            localStorage.setItem('isLogin', JSON.stringify(true))
        },
        toLogout: (state)=>{
            state.isLogin = false;
             localStorage.setItem('isLogin', JSON.stringify(false))
        }
    }
})

export default loginSlice.reducer
export const{toLogin, toLogout} = loginSlice.actions