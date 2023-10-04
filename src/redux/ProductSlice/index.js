import { createSlice } from "@reduxjs/toolkit";




const ProductSlice = createSlice({
    name: 'products',
    initialState:{items: []} ,
    reducers: {
        setProducts:(state, action) => state.items = action.payload
    }
})
 
export const {setProducts} = ProductSlice.actions;
export default ProductSlice.reducer;