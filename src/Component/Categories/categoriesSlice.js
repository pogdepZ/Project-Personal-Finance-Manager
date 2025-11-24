import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getThunk = createAsyncThunk('getCategories',
    async (_, thunkAPI)=>{
        try{
            const response = await fetch('http://localhost:8000/categories')
            const getData = await response.json()
            return getData;
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const createThunk = createAsyncThunk('postCategories',
    async (data, thunkAPI)=>{
        try{
            const obtions ={
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            const response = await fetch('http://localhost:8000/categories', obtions)
            const getData = await response.json()
            return getData;
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: []
    },
    reducers: {
    },  
    extraReducers: (buider)=>{
        buider.addCase(createThunk.fulfilled, (state, action)=>{
            state.list.push(action.payload)
        })
        buider.addCase(getThunk.fulfilled, (state, action)=>{
            state.list = action.payload
        })
    }
})
export default categoriesSlice.reducer
export const {addCate} = categoriesSlice.actions

