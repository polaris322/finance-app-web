import {UPDATE_PROJECT_LIST} from "../types/projects";

const INIT_STATE = {
    list: []
};

export const projectReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case UPDATE_PROJECT_LIST:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return { ...state };
    }
};