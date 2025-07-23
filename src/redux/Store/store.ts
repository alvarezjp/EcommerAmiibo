import {configureStore} from '@reduxjs/toolkit'
import  ProductSlicer  from '../Products/Products.slice'

export const store = configureStore({
    reducer:{
        SliceProduct:ProductSlicer
    },
})

// Inferimos los tipos del store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
