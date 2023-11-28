import {createSlice} from '@reduxjs/toolkit';

type ModalState = {
    isOpenedCartModal: boolean
}

const initialState: ModalState = {
    isOpenedCartModal: false,
    cartItems: [],
    total: 0,
};

const cartSlice = createSlice({
    name: 'isCartSlice',
    initialState,
    reducers: {
        openCartModal: (state) => {
            document.body.style.overflow = 'hidden';
            state.isOpenedCartModal = true;
        },
        closeCartModal: (state) => {
            document.body.style.overflowX = 'auto';
            state.isOpenedCartModal = false;
        },
        addToCart: (state, action) => {
            const { id, color, size } = action.payload;
            const cartItem = action.payload;
            const existingCartItemIndex = state.cartItems.findIndex(item => item.id === id && item.color === color && item.size === size);
            if (existingCartItemIndex !== -1) {
                const updatedCart = [...state.cartItems];
                updatedCart[existingCartItemIndex].quantity += 1;
                state.cartItems = [...updatedCart];
            } else {
                const updatedCart = [...state.cartItems, cartItem];
                state.cartItems = [...updatedCart];
            }
        },
        calculateTotal: (state) => {
            state.total = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        removeFromCartOne: (state, action) => {
            const { id, color, size } = action.payload;
            const existingCartItemIndex = state.cartItems.findIndex(item => item.id === id && item.color === color && item.size === size);

            if (existingCartItemIndex !== -1) {
                const updatedCart = [...state.cartItems];

                if (updatedCart[existingCartItemIndex].quantity > 1) {
                    updatedCart[existingCartItemIndex].quantity -= 1;
                } else {
                    updatedCart.splice(existingCartItemIndex, 1);
                }

                state.cartItems = [...updatedCart];
            }
        },
        removeFromCartAllQuantity: (state, action) => {
            const { id, color, size } = action.payload;
            state.cartItems = state.cartItems.filter(item => !(item.id === id && item.color === color && item.size === size));
        },
    },
});

export const {
    openCartModal,
    closeCartModal,
    addToCart,
    calculateTotal,
    removeFromCartOne,
    removeFromCartAllQuantity
} = cartSlice.actions;

export default cartSlice.reducer;