import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    _id: string;
    title: string;
    price: number;
    image: string;
    category: string;
}

export interface cartState {
    items: Product[]
}

const initialState: cartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            state.items.push(action.payload)
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item._id !== action.payload)
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem('cart')
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;