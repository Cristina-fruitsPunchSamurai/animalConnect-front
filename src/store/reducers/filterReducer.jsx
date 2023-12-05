import { createReducer } from "@reduxjs/toolkit";

import { CHIEN, CHAT, NAC, IS_CHECKED_CAT, IS_CHECKED_DOG, IS_CHECKED_NAC, FILTERED_SPECIES } from "../actions/filterActions";

export const initialState = {
    chien: false,
    chat: false,
    nac: false,
    isCheckedDog : false,
    isCheckedCat : false,
    isCheckedNac : false,
    species: []
}


const filterReducer = createReducer(initialState, (builder) => {
    builder.addCase(CHIEN, (state, action) => {
        state.chien = !state.chien
    }).addCase(CHAT, (state, action) => {
        state.chat = !state.chat
    }).addCase(NAC, (state, action) => {
        state.nac = !state.nac
    }).addCase(IS_CHECKED_DOG, (state, action) => {
        state.isCheckedDog = !state.isCheckedDog
    }).addCase(IS_CHECKED_CAT, (state, action) => {
        state.isCheckedCat = !state.isCheckedCat
    }).addCase(IS_CHECKED_NAC, (state, action) => {
        state.isCheckedNac = !state.isCheckedNac
    }).addCase(FILTERED_SPECIES, (state, action) => {
        state.species = action.payload
    })
})


export default filterReducer