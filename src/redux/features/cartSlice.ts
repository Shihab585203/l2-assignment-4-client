import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    _id: string;
    title: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
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
            const existingProduct = state.items.find(item => item._id === action.payload._id);
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload)
            }

        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
            const product = state.items.find(item => item._id === action.payload);

            if (product) {
                product.quantity += 1
            }
        },
        decrementQuantity: (state, action: PayloadAction<string>) => {
            const product = state.items.find(item => item._id === action.payload);

            if (product && product.quantity > 1) {
                product.quantity -= 1
            }
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

export const { addToCart, incrementQuantity, decrementQuantity,  removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;