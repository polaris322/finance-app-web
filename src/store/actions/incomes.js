import {UPDATE_INCOME_LIST} from "../types/incomes";

export const updateIncomeList = (projects) => ({
    type: UPDATE_INCOME_LIST,
    payload: projects,
});