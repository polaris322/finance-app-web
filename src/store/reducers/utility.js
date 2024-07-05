import {UPDATE_UTILITY_LIST} from "../types/utility";

const INIT_STATE = {
    list: []
};

export const utilityReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case UPDATE_UTILITY_LIST:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return { ...state };
    }
};