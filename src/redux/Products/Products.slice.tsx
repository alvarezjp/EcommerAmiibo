import type { ProductCartInterface } from "@/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface cartProduct {
    cartProduct:ProductCartInterface[]
}

const initialState:cartProduct = {
    cartProduct:[]
}

export const ProductSlicer = createSlice({
name:'SliceProduct',
initialState,
reducers:{
    addToCart:(state,action:PayloadAction<ProductCartInterface>) => {
        state.cartProduct.push(action.payload)
    }
}
})

export const {addToCart} = ProductSlicer.actions;

export default ProductSlicer.reducer;