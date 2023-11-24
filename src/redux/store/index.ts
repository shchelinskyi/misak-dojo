import { configureStore } from '@reduxjs/toolkit';
import formTrialSessionSlice from "../slices/formTrialSessionSlice";
import cartSlice from "../slices/cartSlice"
import productSlice from "../slices/productSlice";

const store = configureStore({
    reducer: {
        // todo: todoSlice,
        formTrial: formTrialSessionSlice,
        cart: cartSlice,
        product: productSlice
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;