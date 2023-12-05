import { createReducer } from "@reduxjs/toolkit";
import {
        REGISTER,
        TOGGLE_SHELTER,
        CHANGE_FIELD
    } from "../actions/registerActions";

export const initialState = {

    //------ REGISTER ------//
    userData : {
        firstname: '',
        lastname: '',
        phone_number: '',
        address: '',
        postcode: '',
        city: '',
        email: '',
        password: '',
        passwordConfirm: '',
        picture: '',
        is_shelter : false,
        company_name: '',
        siret: '',
    },
    isRegistered: false,
    isLoading: false,
    registerErrorUser: undefined,
    registerErrorRegex: undefined,
    redirectAfterSignup :undefined
}

const registerReducer = createReducer(initialState, (builder) => {
    //---- INPUT VALUE------//
    builder.addCase(CHANGE_FIELD, (state, action) => {
        const {inputName, inputValue} = action.payload;
        state.userData[inputName] = inputValue;
    }).addCase(TOGGLE_SHELTER, (state, action) => {
        state.userData.is_shelter = !state.userData.is_shelter;
    }).addCase(REGISTER.fulfilled, (state, action) => {
        state.isRegistered = true;
        state.registerErrorUser = "Votre compte a bien été créé"
        state.redirectAfterSignup = true;
        state.userData = {
            firstname: '',
            lastname: '',
            phone_number: '',
            address: '',
            postcode: '',
            city: '',
            email: '',
            password: '',
            passwordConfirm: '',
            picture: '',
            is_shelter: '',
            siret: '',
            company_name: '',
        }

    }).addCase(REGISTER.rejected, (state, action) => {
        state.registerErrorUser = action.payload.errors;
        state.registerErrorRegex = action.payload.error;
    }).addCase(REGISTER.pending, (state, action) => {
        state.isLoading = true;
    })
});

export default registerReducer;