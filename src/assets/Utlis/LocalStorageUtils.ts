export const loadCartFromLocalStorage = () => {
    try {
        const cartState = localStorage.getItem('cart');
        return cartState ? JSON.parse(cartState) : undefined;
    } catch (error) {
        console.log('Error Loading cart from localstorage', error);
        return undefined;
    }
}

export const savedCartToLocalStorage = (cart: any) => {
    try {
        const cartState = JSON.stringify(cart);
        localStorage.setItem('cart', cartState);
    } catch (error) {
        console.log('Error saving to localStorage', cart);
    }
}