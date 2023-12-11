import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { profileCred } from "./profileCred";

const rootReducer = combineReducers({
    productReducer,
    cartReducer,
    profileCred
})

export default rootReducer