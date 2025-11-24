import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchThunk = createAsyncThunk('getTransactions', 
    async (_, thunkAPI)=>{
        try{
            const response = await fetch('http://localhost:8000/transactions')
            const data = await response.json()
            return data
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const createThunk = createAsyncThunk('postTransactions', 
    async (data, thunkAPI)=>{
        try{
            const obtions ={
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            const response = await fetch('http://localhost:8000/transactions', obtions)
            const getData = await response.json()
            return getData;
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const deleteThunk = createAsyncThunk('delete', 
    async (id, thunkAPI)=>{
        try{
            const obtions ={
                method: 'DELETE',
            }
            const response = await fetch(`http://localhost:8000/transactions/${id}`, obtions)
            return id;
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

const transactionSlice = createSlice({
    name: 'transactions',
    initialState: {
        list: []
    },
    reducers:{},
    extraReducers: (buider)=>{
        buider.addCase(fetchThunk.fulfilled, (state, action)=>{
            state.list = action.payload
        })
        buider.addCase(createThunk.fulfilled, (state, action)=>{
            state.list.push(action.payload)
        })
        buider.addCase(deleteThunk.fulfilled, (state, action)=>{
            state.list = state.list.filter(item => item.id != action.payload)
        })
    }
})

export default transactionSlice.reducer
