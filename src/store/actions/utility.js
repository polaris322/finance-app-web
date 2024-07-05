import {UPDATE_UTILITY_LIST} from "../types/utility";

export const updateUtilityList = (projects) => ({
    type: UPDATE_UTILITY_LIST,
    payload: projects,
});