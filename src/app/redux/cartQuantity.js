import { actionTypes } from "./types"

export const plusQuantity = (data) => {
    return{
        type:actionTypes.PLUS_QUANTITY,
        payload:data
    }
}

export const minusQuantity = (data) => {
    return{
        type:actionTypes.MINUS_QUANTITY,
        payload:data
    }
}