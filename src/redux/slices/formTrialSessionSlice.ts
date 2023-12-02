import {createSlice} from '@reduxjs/toolkit';

type FormState = {
    isOpenedForm: boolean;
    isOpenedSuccessModal: boolean;
}

const initialState: FormState = {
    isOpenedForm: false,
    isOpenedSuccessModal: false
};

const formTrialSessionSlice = createSlice({
    name: 'isFormTrialSession',
    initialState,
    reducers: {
        openForm: (state) => {
            // document.body.classList.add('no-scroll');
            // document.body.style.overflowY = 'hidden';
            document.body.style.setProperty('overflow-y', 'hidden', 'important');
            state.isOpenedForm = true;
        },
        closeForm: (state) => {
            state.isOpenedForm = false;
            // document.body.classList.remove('no-scroll');
            document.body.style.overflowY = 'auto';
        },
        openSuccessModal: (state) => {
            // document.body.classList.add('no-scroll');
            // document.body.style.overflowY = 'hidden';
            document.body.style.setProperty('overflow-y', 'hidden', 'important');
            state.isOpenedSuccessModal = true;
        },
        closeSuccessModal: (state) => {
            state.isOpenedSuccessModal = false;
            // document.body.classList.remove('no-scroll');
            document.body.style.overflowY = 'auto';
        },
    },
});

export const {
    openForm,
    closeForm,
} = formTrialSessionSlice.actions;

export default formTrialSessionSlice.reducer;