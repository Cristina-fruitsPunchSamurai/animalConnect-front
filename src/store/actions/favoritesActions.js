import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from '../../utils/API'

export const FAVORITES = createAsyncThunk('favorite/FAVORITES', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().user.token

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }

        const { data } = await axios.get(`${BASE_URL}/favorites`, config)

        return data
    } catch(error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


export const ADD_FAVORITE = createAsyncThunk('favorite/ADD_FAVORITES', async (id, thunkAPI) => {
    try{
        const token = thunkAPI.getState().user.token

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }

        const { data } = await axios.post(`${BASE_URL}/favorites/${id}`, {}, config)

        return data
    } catch(error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


export const DELETE_FAVORITE = createAsyncThunk('favorite/DELETE_FAVORITES', async (id, thunkAPI) => {
    try{
        const token = thunkAPI.getState().user.token

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }

        const { data } = await axios.delete(`${BASE_URL}/favorites/${id}`, config)

        return data
    } catch(error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})