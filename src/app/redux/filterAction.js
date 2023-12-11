import { actionTypes } from "./types"

export const sendFilters = (data) =>  {
    return {
        type:actionTypes.SEND_FILTERS,
        payload:data
    }
}