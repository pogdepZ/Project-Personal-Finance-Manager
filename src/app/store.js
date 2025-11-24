import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Component/Login/loginSlice";
import transactionReducer from "../Component/Transactions/transactionSlice";
import filterReducer from "../Component/Transactions/Filter/fiterSlice";
const store = configureStore({
    reducer:{
        login: loginReducer,
        transactions: transactionReducer,
        filter: filterReducer
    }
})

export default store;