import { createSlice } from "@reduxjs/toolkit";

const list = localStorage.getItem('transactions') ? JSON.parse(localStorage.getItem('transactions')) : []

const transactionSlice = createSlice({
    name: 'transactions',
    initialState: {
        list: list
    },
    reducers:{
        addTransaction: (state, action)=>{
            state.list.push(action.payload)
            localStorage.setItem('transactionList', JSON.stringify(state.list))
        },
        deleteTransaction: (state, action)=>{
            state.list = state.list.filter(item=> item.id !== action.payload)
            localStorage.setItem('transactionList', JSON.stringify(state.list))
        },
        updateManyStatus: (state, action)=>{
            const {ids, status} = action.payload
            state.list = state.list.map(item=> ids.includes(item.id) ? {...item, type: status} : item)
            localStorage.setItem('transactionList', JSON.stringify(state.list))
        }
    },
   
})

export default transactionSlice.reducer
export const {addTransaction, deleteTransaction, updateManyStatus} = transactionSlice.actions
