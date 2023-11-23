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
            state.isOpenedCartModal = true;
        },
        closeCartModal: (state) => {
            state.isOpenedCartModal = false;
        },
    },
});

export const {
    openCartModal,
    closeCartModal,
} = cartSlice.actions;

export default cartSlice.reducer;