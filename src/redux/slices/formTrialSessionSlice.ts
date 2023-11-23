import {createSlice} from '@reduxjs/toolkit';

type FormState = {
    isOpenedForm: boolean
}

const initialState: FormState = {
    isOpenedForm: false
};

const formTrialSessionSlice = createSlice({
    name: 'isFormTrialSession',
    initialState,
    reducers: {
        openForm: (state) => {
            state.isOpenedForm = true;
        },
        closeForm: (state) => {
            state.isOpenedForm = false;
        },
    },
});

export const {
    openForm,
    closeForm,
} = formTrialSessionSlice.actions;

export default formTrialSessionSlice.reducer;