import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import date from "./date";
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: ["date"],
};

const rootReducer = combineReducers({
    date : date,
});
export default persistReducer(persistConfig, rootReducer)
