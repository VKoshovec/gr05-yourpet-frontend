import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import dataReducer from './data/slice';

import { localReducer } from './local/slice';
import authReducer from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { noticesFilterSlice } from './filters/noticesFilter/filterSlice';


const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  data: dataReducer,
  prestate: localReducer,
  noticesFilter:noticesFilterSlice,
});

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

  export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const persistor = persistStore(store);
