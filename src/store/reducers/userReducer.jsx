import { createReducer } from "@reduxjs/toolkit";
import {
    INPUT_EMAIL,
    INPUT_PASSWORD,
    LOGIN, LOGOUT,
    PROFILE_INFO,
    PATCH_USER_INFOS,
    INPUT_FIELD,
    DONATE_ANIMAL,
    INPUT_CANDIDATURE_MESSAGE,
    SEND_REQUEST,
    FETCH_REQUESTS,
    FETCH_RECEIVED_REQUEST,
    ACCEPT_REQUEST,
    REFUSE_REQUEST,
    FILE_FIELD,
    POSTED
} from "../actions/userActions";


export const initialState = {
    //------ LOGIN initiale state ------//
    credentials : {
        email: '',
        password: ''
    },
    isLogged: false,
    userId: undefined,
    loginIsLoading: false,
    loginError: undefined,
    profileInfo: [],

    //------ local storage------//
    token: undefined,
    picture : null,

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
        company_name: '',
        siret: '',
    },

    animalInfo:[],
    animalId: undefined,


//------ DONATION initiale state ------//
    animalData : {
        name : '',
        registration_nb: '',
        age: '',
        weight: '',
        gender: '',
        color: '',
        price: '',
        description: '',
        picture:'',
        specie:''
    },
    isPosted: false,
    postError: undefined,
    postLoading: false,
    //animalList: [],

//------ CANDIDATURES initiale state ------//
    candidatureMessage: '',
    candidatureConfirmation: false,
    candidatureError: undefined,
    candidatureLoading: false,
    noCandidaturesReceived:undefined,
    noCandidaturesSent:undefined,
    candidaturesReceived : [],
    candidaturesSent : [],
    status: undefined,
    accepted: false,
    rejected: false,
    candidatureDesicionError: undefined,
    messageRefus : null
}

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(INPUT_EMAIL, (state, action)=> {
        state.credentials.email = action.payload;
    }).addCase(INPUT_PASSWORD, (state, action)=> {
        state.credentials.password = action.payload;
    }).addCase(LOGIN.fulfilled, (state, action) => {
        state.isLogged = true;
        state.loginError = "Connexion Réussie !";
        state.token = action.payload.token
        state.picture = action.payload.picture
        state.userId = action.payload.userId
        state.credentials = {
            email: '',
            password: ''
        }
    }).addCase(LOGIN.rejected, (state, action) => {
        state.loginError = action.payload.error;
    }).addCase(LOGIN.pending, (state, action) => {
        state.loginIsLoading = true;
    }).addCase(LOGOUT, (state, action) => {
        state.isLogged = false;
        localStorage.removeItem('token')
        localStorage.removeItem('picture')
    }).addCase(PROFILE_INFO.fulfilled, (state, action) => {
        state.profileInfo = action.payload;
    }).addCase(PROFILE_INFO.rejected, (state, action) => {
        state.loginError = action.payload.error;
    }).addCase(PROFILE_INFO.pending, (state, action) => {
        state.loginIsLoading = true;
    }).addCase(PATCH_USER_INFOS, (state, action) => {
        state.userData.firstname = action.payload
    }).addCase(INPUT_FIELD, (state, action)=> {
        const { property, inputValue } = action.payload;
        state.animalData[property] = inputValue;
    }).addCase(FILE_FIELD, (state, action)=> {
        const { property, inputValue } = action.payload;
        state.animalData[property] = inputValue
    }).addCase(DONATE_ANIMAL.fulfilled, (state, action) => {
        state.isPosted = true;
        state.animalData = {
        name : '',
        registration_nb: '',
        age: '',
        weight: '',
        gender: '',
        color: '',
        price: '',
        description: '',
        picture:'',
        specie:''
    };
    //state.animalList.push(action.payload);
    }).addCase(DONATE_ANIMAL.rejected, (state, action) => {
        state.postError = action.payload.error;
    }).addCase(DONATE_ANIMAL.pending, (state, action) => {
        state.postLoading = true;
    }).addCase(POSTED, (state, action) => {
        state.isPosted = false;
    }).addCase(INPUT_CANDIDATURE_MESSAGE, (state, action)=> {
        state.candidatureMessage = action.payload;
    }).addCase(SEND_REQUEST.fulfilled, (state, action) => {
        state.candidatureConfirmation = !state.candidatureConfirmation;
        state.candidatureMessage = '';
        state.messageRefus = 'Votre candidature a bien été envoyée'
    }).addCase(SEND_REQUEST.rejected, (state, action) => {
        state.candidatureError = action.payload.error;
        state.messageRefus = action.payload.message
    }).addCase(SEND_REQUEST.pending, (state, action) => {
        state.candidatureLoading = true;
    }).addCase(FETCH_REQUESTS.fulfilled, (state, action) => {
        state.noCandidaturesSent = action.payload.message;
        state.candidaturesSent = action.payload;
    }).addCase(FETCH_REQUESTS.pending, (state, action) => {
        state.candidatureLoading = true;
    }).addCase(FETCH_REQUESTS.rejected, (state, action) => {
        state.candidatureError = action.payload.error
    }).addCase(FETCH_RECEIVED_REQUEST.fulfilled, (state, action) => {
        state.noCandidaturesReceived = action.payload.receiveData.message
        state.candidaturesReceived = action.payload.receiveData;
    }).addCase(FETCH_RECEIVED_REQUEST.rejected, (state, action) => {
        state.candidatureError = action.payload.error
    }).addCase(ACCEPT_REQUEST.fulfilled, (state, action) => {
        state.accepted = true
    }).addCase(ACCEPT_REQUEST.rejected, (state, action) => {
        state.candidatureDesicionError = 'Une erreur est survenue, revenez plus tard svp'
    }).addCase(ACCEPT_REQUEST.pending, (state, action) => {
        state.candidatureLoading = true;
    }).addCase(REFUSE_REQUEST.fulfilled, (state, action) => {
        state.rejected = true
    }).addCase(REFUSE_REQUEST.rejected, (state, action) => {
        state.candidatureDesicionError = 'Une erreur est survenue, revenez plus tard svp'
    }).addCase(REFUSE_REQUEST.pending, (state, action) => {
        state.candidatureLoading = true;
    })
});

export default userReducer;