import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {RootReducer} from './root-reducer';
import {logger} from 'redux-logger';
var middlewares = [];
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

if (process.env.NODE_ENV === 'development') {
  middlewares = [thunk, logger];
} else {
  middlewares = [thunk];
}
const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares),
);
export const persistor = persistStore(store);
