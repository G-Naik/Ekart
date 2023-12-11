import { actionTypes } from "./types";

export const removeItem = (data) => {
    return{
        type:actionTypes.REMOVE_ITEM,
        payload:data
    }
}
