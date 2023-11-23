import { configureStore } from '@reduxjs/toolkit';
import formTrialSessionSlice from "../slices/formTrialSessionSlice";
import cartSlice from "../slices/cartSlice"

const store = configureStore({
    reducer: {
        // todo: todoSlice,
        formTrial: formTrialSessionSlice,
        cart: cartSlice
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;