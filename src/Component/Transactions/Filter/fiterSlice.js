import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        category: 'ALL',
        status: 'ALL',
        date: ''
    },

    reducers: {
        setSearch: (state,action)=>{
            state.search = action.payload
        },
         setCategory: (state,action)=>{
            state.category = action.payload
        },
         setStatus: (state,action)=>{
            state.status = action.payload
        },
         setDate: (state,action)=>{
            state.date = action.payload
        }
    }
})
export default filterSlice.reducer
export const {setCategory, setSearch, setDate, setStatus} = filterSlice.actions