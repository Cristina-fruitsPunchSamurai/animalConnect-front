import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from '../../utils/API'

export const USER_ADS = createAsyncThunk('userAds/USER_ADS', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().user.token
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const {
            data
        } = await axios.get(`${BASE_URL}/animals/posted`, config);

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }

})

export const DETAILS_ADS = createAsyncThunk('userAds/DETAILS_ADS', async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }

      const { data } = await axios.get(`${BASE_URL}/animals/posted/${id}`, config);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  })



export const UPDATE_USER_AD = createAsyncThunk(
    'userAds/UPDATE_USER_AD',
    async ({ adData, adId }, thunkAPI) => { // Utilisez des arguments explicites
      try {
        const token = thunkAPI.getState().user.token;

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const {
          name,
          description,
          age,
          weight,
          color,
          price,
          picture,
          gender,
        } = adData;

        const url = await axios.patch(`${BASE_URL}/animal/${adId}`, {
          name,
          description,
          age,
          weight,
          color,
          price,
          picture,
          gender,
          adId,
        }, config);

        return url.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );


export const DELETE_USER_AD = createAsyncThunk(
    'userAds/DELETE_USER_AD',
    async (adId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().user.token;

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            }

            const {
                data
            } = await axios.delete(
                `${BASE_URL}/animal/${adId}`,
                config
            );

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);