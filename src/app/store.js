import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Component/Login/loginSlice";
import transactionReducer from "../Component/Transactions/transactionSlice";
import filterReducer from "../Component/Transactions/Filter/fiterSlice";
import categoriesReducer from "../Component/Categories/categoriesSlice";
import budgetReducer from "../Component/Budget/budgetSlice";
const store = configureStore({
    reducer:{
        login: loginReducer,
        transactions: transactionReducer,
        filter: filterReducer,
        categories: categoriesReducer ,
        budget: budgetReducer
    }
})

export default store;