import {UPDATE_INCOME_LIST} from "../types/incomes";

const INIT_STATE = {
    list: {fixed: [], dynamic: []}
};

export const incomeReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case UPDATE_INCOME_LIST:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return { ...state };
    }
};