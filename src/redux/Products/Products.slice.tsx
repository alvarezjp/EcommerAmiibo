import type { ProductCartInterface } from "@/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface cartProduct {
    cartProduct: ProductCartInterface[]
}

const initialState: cartProduct = {
    cartProduct: []
}

export const ProductSlicer = createSlice({
    name: 'SliceProduct',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductCartInterface>) => {

            const ExploredProduct = state.cartProduct.find((product) => product.id === action.payload.id)

            if (ExploredProduct) {
                ExploredProduct.quantity += 1
            } else {
                state.cartProduct.push(action.payload)
            }
        },
        removeToCart: (state, action: PayloadAction<ProductCartInterface>) => {

            const ExploredProduct = state.cartProduct.find((product) => product.id === action.payload.id)

            if (ExploredProduct === undefined) {
                console.error("Error al eliminar un producto")
            } else {

                if (ExploredProduct?.quantity === 1) {
                    state.cartProduct = state.cartProduct.filter((product) => product.id !== action.payload.id)
                }
                else {
                    ExploredProduct.quantity -= 1
                }
            }

        }

    }
})

export const { addToCart, removeToCart } = ProductSlicer.actions;

export default ProductSlicer.reducer;