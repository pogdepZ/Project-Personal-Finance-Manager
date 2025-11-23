import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Component/Login/loginSlice";
const store = configureStore({
    reducer:{
        login: loginReducer
    }
})

export default store;