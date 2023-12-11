import { actionTypes } from "./types";

export const addToCart = (data) => {
    return{
        type:actionTypes.ADD_TO_CART,
        payload:data
    }
}
