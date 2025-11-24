import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchThunk = createAsyncThunk('get', 
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
    }
})

export default transactionSlice.reducer
