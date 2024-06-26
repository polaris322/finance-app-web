import {UPDATE_ACTIVITY_LIST} from "../types/activities";

const INIT_STATE = {
    list: []
};

export const activityReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case UPDATE_ACTIVITY_LIST:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return { ...state };
    }
};