import { actionTypes } from "../types";

const initialState = {
    profileDetails: null
};


export const profileCred = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PROFILE_CREDENTIALS: {
            return {
                ...state,
                profileDetails:action.payload
            }
        }
        default:
            return state;
    }
};
