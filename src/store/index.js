import {configureStore} from '@reduxjs/toolkit';
import registerReducer from './reducers/registerReducer';
import userReducer from './reducers/userReducer';
import filterReducer from './reducers/filterReducer';
import favoritesReducer from './reducers/favoritesReducer';

import userAdsReducer from './reducers/userAdsReducer';

//import candidaturesReducer from '../components/Candidatures/Candidatures';

//import donationReducer from './reducers/donationReducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        register: registerReducer,
        filter: filterReducer,
        favorites: favoritesReducer,
        userAds: userAdsReducer,

        // candidatures: candidaturesReducer,

        //donation : donationReducer
    },
});

export default store;