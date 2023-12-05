import {createAsyncThunk, createAction} from '@reduxjs/toolkit';
import axios from 'axios'
import { BASE_URL } from '../../utils/API'

//------ Actions ------//
export const INPUT_PICTURE = createAction('register/INPUT_PICTURE');
export const INPUT_IS_SHELTER = createAction('register/INPUT_IS_SHELTER');
export const TOGGLE_SHELTER = createAction('register/TOGGLE_SHELTER');
export const CHANGE_FIELD = createAction('register/CHANGE_FIELD');

//------ Actions using asyncThunk ------//
export const REGISTER = createAsyncThunk('user/REGISTER', async  (_, thunkAPI) => {
    try {
        const {
            firstname,
            lastname,
            phone_number,
            address,
            postcode,
            city,
            email,
            password,
            passwordConfirm,
            is_shelter,
            siret,
            company_name
        } = thunkAPI.getState().register.userData

        const {data} = await axios.post(`${BASE_URL}/register`, {
            firstname,
            lastname,
            phone_number,
            address,
            postcode,
            city,
            email,
            password,
            passwordConfirm,
            company_name,
            siret,
            is_shelter
        })

        return data;

    } catch(error){
        return thunkAPI.rejectWithValue(error.response.data)
    }
})