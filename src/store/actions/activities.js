import {UPDATE_ACTIVITY_LIST} from "../types/activities";

export const updateActivityList = (activities) => ({
    type: UPDATE_ACTIVITY_LIST,
    payload: activities,
});