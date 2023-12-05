import { createReducer } from "@reduxjs/toolkit";
import { FAVORITES, ADD_FAVORITE, DELETE_FAVORITE } from "../actions/favoritesActions";

export const initialState = {
    bookmarks : [],
    favorite : true,
    message : undefined,
    error : ''
}

const favoritesReducer = createReducer(initialState, (builder) => {
    builder.addCase(FAVORITES.fulfilled, (state, action) => {
        state.bookmarks = action.payload
    }).addCase(ADD_FAVORITE.fulfilled, (state, action) => {
        state.bookmarks = state.bookmarks, action.payload
        state.message = action.payload.message
    }).addCase(ADD_FAVORITE.rejected, (state, action) => {
        state.message = action.payload.message
    }).addCase(DELETE_FAVORITE, (state, action) => {
        state.bookmarks = state.bookmarks, action.payload
    })
});

export default favoritesReducer;


