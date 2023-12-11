import { actionTypes } from "./types"

export const FetchApiData = (data) => {
    return {
        type:actionTypes.FETCH_API,
        payload:data
    }
}