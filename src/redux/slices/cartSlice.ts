import {createSlice} from '@reduxjs/toolkit';

type ModalState = {
    isOpenedCartModal: boolean
}

const initialState: ModalState = {
    isOpenedCartModal: false
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
            document.body.style.overflow = 'auto';
            state.isOpenedCartModal = false;
        },
    },
});

export const {
    openCartModal,
    closeCartModal,
} = cartSlice.actions;

export default cartSlice.reducer;