import { actionTypes } from "./types"

export const productDescription = (data) => {
    return{
        type:actionTypes.PRODUCT_DESCRIPTION,
        payload:data
    }
}