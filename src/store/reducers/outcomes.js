import {UPDATE_OUTCOME_LIST} from "../types/outcomes";

const INIT_STATE = {
    list: {fixed: [], dynamic: []}
};

export const outcomeReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case UPDATE_OUTCOME_LIST:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return { ...state };
    }
};