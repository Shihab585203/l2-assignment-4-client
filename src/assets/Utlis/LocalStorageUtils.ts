export const loadCartFromLocalStorage = <T>(cart: string): T | null => {
    try {
        const cartState = localStorage.getItem(cart);
        return cartState ? JSON.parse(cartState) : undefined;
    } catch (error) {
        console.log('Error Loading cart from localstorage', error);
        return null;
    }
}

export const savedCartToLocalStorage = <T>(cart: string, data: T): void => {
    try {        
        localStorage.setItem(cart, JSON.stringify(data));
    } catch (error) {
        console.log('Error saving to localStorage', cart);
    }
}