import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getThunk = createAsyncThunk('getCategories',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:8000/categories')
            const getData = await response.json()
            return getData;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const createThunk = createAsyncThunk('postCategories',
    async (data, thunkAPI) => {
        try {
            const obtions = {
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
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
export const updateThunk = createAsyncThunk('categories/update',
    async (ids, thunkAPI) => {
        try {
            // Tạo array of promises
            const promises = ids.map(id => {
                const options = {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        status: 'used'
                    })
                }
                return fetch(`http://localhost:8000/categories/${id}`, options)
                    .then(res => {
                        if (!res.ok) {
                            throw new Error(`Failed to update ${id}`)
                        }
                        return res.json()
                    })
            })

            // Chờ TẤT CẢ requests hoàn thành
            const results = await Promise.all(promises)


            return ids
        }
        catch (e) {
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
    extraReducers: (builder) => {
        builder.addCase(createThunk.fulfilled, (state, action) => {
            state.list.push(action.payload)
        })
        builder.addCase(getThunk.fulfilled, (state, action) => {
            state.list = action.payload
        })
        builder.addCase(updateThunk.fulfilled, (state, action) => {
            const idIsNeed = action.payload

            state.list.forEach(item => {
                if (idIsNeed.includes(item.id)) {
                    item.status = 'used'
                }
                else {
                    item.state = 'notUse'
                }
            }
            )
        })
    }
})
export default categoriesSlice.reducer
export const { updateManyStatus } = categoriesSlice.actions

