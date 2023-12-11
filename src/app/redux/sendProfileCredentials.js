import { actionTypes } from "./types";

export const sendLoginCredintials = (data) => {
    return{
        type:actionTypes.PROFILE_CREDENTIALS,
        payload:data
    }
}