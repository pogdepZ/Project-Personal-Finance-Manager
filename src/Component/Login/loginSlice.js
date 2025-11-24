import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const log = localStorage.getItem('isLogin')
const isLog = log ? JSON.parse(log) : false


export const loginThunk = createAsyncThunk('check', 
    async (acc, _) =>{
        const response = await fetch('http://localhost:8000/users')
        const data = await response.json()
        const validUser = data.find(item=>item.email == acc.email && item.password == acc.password)
        if(validUser){
           return true;
        }
        return false;
    }
)

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLogin: isLog
       
    },
    reducers: {
        toLogout: (state) => {
            state.isLogin = false;
            localStorage.setItem('isLogin', false);
        }
    },
    extraReducers: (buider)=>{
        buider
            .addCase(loginThunk.fulfilled, (state, action) =>{
                state.isLogin = action.payload;
                if (action.payload == true) {
                    localStorage.setItem('isLogin', true);
                }
            })
    }
})

export default loginSlice.reducer
export const{toLogin, toLogout} = loginSlice.actions