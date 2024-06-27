import {UPDATE_OUTCOME_LIST} from "../types/outcomes";

export const updateOutcomeList = (outcomes) => ({
    type: UPDATE_OUTCOME_LIST,
    payload: outcomes,
});