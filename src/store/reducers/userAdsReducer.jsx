import { createReducer } from "@reduxjs/toolkit";
import { USER_ADS, DETAILS_ADS, UPDATE_USER_AD, DELETE_USER_AD } from "../actions/userAdsActions";

export const initialState = {
    userAds: [],
    adDetails: null, // Ajoutez adDetails ici et initialisez-le à null
    message: undefined,
}

const userAdsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(USER_ADS.fulfilled, (state, action) => {
            state.userAds = action.payload;
            state.message = undefined; // Réinitialise le message en cas de succès
        })
        .addCase(USER_ADS.rejected, (state, action) => {
            state.userAds = [];
            state.message = action.error.message; // Gère les erreurs de l'action USER_ADS
        })
        .addCase(DETAILS_ADS.fulfilled, (state, action) => {
            state.adDetails = action.payload; // Met à jour adDetails avec les détails de l'annonce
            state.message = undefined; // Réinitialise le message en cas de succès
        })
        .addCase(DETAILS_ADS.rejected, (state, action) => {
            state.adDetails = null; // Réinitialise adDetails en cas d'erreur
            state.message = action.error.message; // Gère les erreurs de l'action DETAILS_ADS
        })
        .addCase(UPDATE_USER_AD.fulfilled, (state, action) => {
            const updatedAd = action.payload;
            const adIndex = state.userAds.findIndex(ad => ad.id === updatedAd.id);
        
            if (adIndex !== -1) {
                state.userAds[adIndex] = updatedAd;
                state.message = undefined; // Réinitialise le message en cas de succès
            }
        })
        .addCase(DELETE_USER_AD.fulfilled, (state, action) => {
            const deletedAdId = action.payload.id;
            state.userAds = state.userAds.filter(ad => ad.id !== deletedAdId);
            state.message = undefined; // Réinitialise le message en cas de succès
        })
        .addCase(UPDATE_USER_AD.rejected, (state, action) => {
            state.message = action.error.message; // Gère les erreurs de l'action UPDATE_USER_AD
        })
        .addCase(DELETE_USER_AD.rejected, (state, action) => {
            state.message = action.error.message; // Gère les erreurs de l'action DELETE_USER_AD
        });
});

export default userAdsReducer;
