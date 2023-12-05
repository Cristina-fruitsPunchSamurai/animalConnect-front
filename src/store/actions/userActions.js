import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/API';


//------ ACTIONS ------//

//* User ----------------------//
export const INPUT_EMAIL = createAction('user/CHANGE_EMAIL');
export const INPUT_PASSWORD = createAction('user/CHANGE_PASSWORD');
export const LOGOUT = createAction('user/LOGOUT');

//* Donation ----------------------//
export const INPUT_FIELD = createAction("user/INPUT_FIELD");
export const FILE_FIELD = createAction('user/FILE_FIELD');
export const INPUT_CANDIDATURE_MESSAGE = createAction("user/INPUT_CANDIDATURE_MESSAGE");
export const POSTED = createAction("user/POSTED");

//* Login ----------------------//
export const LOGIN = createAsyncThunk('user/LOGIN', async  (_, thunkAPI) => {
    try {
        const {email, password} = thunkAPI.getState().user.credentials

        const {data} = await axios.post(`${BASE_URL}/login`, {email, password})
        localStorage.setItem('token', data.token);

        localStorage.setItem('picture', (data.user.picture));
        return data.user;
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data)
    }

})


//* Profile ----------------------//
export const PROFILE_INFO = createAsyncThunk('user/PROFILE_INFO', async  (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().user.token
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const {data} = await axios.get(`${BASE_URL}/profile`, config)
        return data;
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data)
    }

})


//* PATCH  ----------------------//
export const PATCH_USER_INFOS = createAsyncThunk('user/PATCH_USER_INFOS', async (_, thunkAPI) => {
    try {

        const {userId, userData} = thunkAPI.getState().user

        const token = thunkAPI.getState().user.token
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const {
            firstname,
            lastname,
            email,
            phone_number,
            address,
            city,
            postal_code,
            picture,
            shelter_company_name,
            shelter_siret
            } = userData

        const url = await axios.patch(`${BASE_URL}/profile`, {firstname, lastname, email, phone_number, address, city, postal_code, picture, shelter_company_name, shelter_siret, userId}, config)


        return url.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})



//* Donation ----------------------//
export const DONATE_ANIMAL = createAsyncThunk('donation/DONATE_ANIMAL', async  (animalPicture, thunkAPI) => {
    try {
//On prend de notre state les élements nécessaire pour la requête
        const token = thunkAPI.getState().user.token
        const {userId} = thunkAPI.getState().user
        const {specie} = thunkAPI.getState().user.animalData

        const {
            name,
            registration_nb,
            age,
            weight,
            gender,
            color,
            price,
            description,
        } = thunkAPI.getState().user.animalData


//Les éléments qu'on va passer au back
        const requestData = {
            name,
            registration_nb,
            age,
            weight,
            gender,
            color,
            price,
            description,
            picture : animalPicture,
            user_id: userId,
            specie_id: specie
        };
        const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'content-type' : 'multipart/form-data'
                }
            }

        const {data} = await axios.post(`${BASE_URL}/animal`, requestData, config )

        return data;

    } catch(error){
        return thunkAPI.rejectWithValue(error.response.data)
    }
})



//* Envoyer candidature ----------------------//
export const SEND_REQUEST = createAsyncThunk('user/SEND_REQUEST', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().user.token
        const {userId} = thunkAPI.getState().user
        const message = thunkAPI.getState().user.candidatureMessage

        const requestData = {
            user_id: userId,
            animal_id: id,
            request_message :message
        }

        const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }

        const {data} = await axios.post(`${BASE_URL}/request/${id}`, requestData, config )

        return data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }

})


//* Recuperer mes candidatures reçues ou envoyées ----------------------//

export const FETCH_REQUESTS = createAsyncThunk('user/FETCH_REQUESTS', async (_, thunkAPI) => {
try {
    const token = thunkAPI.getState().user.token
    const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }

    const {data} = await axios.get(`${BASE_URL}/sentRequest`, config);

    return data;
}catch (error){
    return thunkAPI.rejectWithValue(error.response.data)
}

})


export const FETCH_RECEIVED_REQUEST = createAsyncThunk('user/FETCH_RECEIVED_REQUEST', async (_, thunkAPI) => {
try {
    const token = thunkAPI.getState().user.token
    const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }

    const receivedDataResponse =  await axios.get(`${BASE_URL}/receivedRequest`, config);
    const receiveData = receivedDataResponse.data;

    return {receiveData};
}catch (error){

    return thunkAPI.rejectWithValue(error.response.data)
}

})

//* Accepter une candidature ----------------------//
export const ACCEPT_REQUEST = createAsyncThunk('user/ACCEPT_REQUEST', async ({animalId, requesterId}, thunkAPI) => {
    try {
        const token = thunkAPI.getState().user.token
        const requestData = {
            requesterId: requesterId,
            animalId: animalId,
        }
        const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }

        const {data} =  await axios.patch(`${BASE_URL}/request/${animalId}/${requesterId}/accept`, requestData, config);
        return data;
    }catch (error){

        return thunkAPI.rejectWithValue(error.response.data)
    }

    })


    //* Refuser une candidature ----------------------//
export const REFUSE_REQUEST = createAsyncThunk('user/REFUSE_REQUEST', async ({animalId, requesterId}, thunkAPI) => {
    try {
        const token = thunkAPI.getState().user.token
        const requestData = {
            requesterId: requesterId,
            animalId: animalId,
        }
        const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }

        const {data} =  await axios.patch(`${BASE_URL}/request/${animalId}/${requesterId}/reject`, requestData, config);

        return data;
    }catch (error){
        return thunkAPI.rejectWithValue(error.response.data)
    }

})