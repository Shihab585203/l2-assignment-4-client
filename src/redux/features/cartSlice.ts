import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadCartFromLocalStorage, savedCartToLocalStorage } from "../../assets/Utlis/LocalStorageUtils";

interface CartItem {
    _id: string;
    title: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
}

export interface cartState {
    items: CartItem[],
    isLoading: boolean,
    error: string | null,
}

const initialState: cartState = {
    items: loadCartFromLocalStorage('cartItems') || [],
    isLoading: false,
    error: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItem: (state, action: PayloadAction<CartItem[]>) => {
            state.items === action.payload;
            savedCartToLocalStorage('cartItems', state.items);
        },
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingProduct = state.items.find(item => item._id === action.payload._id);
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload)
            }
            savedCartToLocalStorage('cartItems', state.items);
        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
            const product = state.items.find(item => item._id === action.payload);

            if (product) {
                product.quantity += 1
            }
            savedCartToLocalStorage('cartItems', state.items);
        },
        decrementQuantity: (state, action: PayloadAction<string>) => {
            const product = state.items.find(item => item._id === action.payload);

            if (product && product.quantity > 1) {
                product.quantity -= 1
            }
            savedCartToLocalStorage('cartItems', state.items);
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item._id !== action.payload)
            savedCartToLocalStorage('cartItems', state.items);

        },
        clearCart: (state) => {
            state.items = [];
            savedCartToLocalStorage('cartItems', []);
        }
    }
})

export const { setCartItem, addToCart, incrementQuantity, decrementQuantity,  removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;