import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {}
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setStateCart: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setStateCart } = cartSlice.actions
export default cartSlice.reducer;


