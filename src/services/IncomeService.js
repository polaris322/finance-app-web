import { sendRequest } from "../utils";
import {INCOME, UPDATE_STATUS} from "../config/API";

export const createIncome = (name, amount, type, frequency, payment_method, start_date, end_date) => {
    return sendRequest(INCOME, 'POST', {name, amount, type, frequency, payment_method, start_date, end_date});
}

export const fetchIncomes = () => {
    return sendRequest(INCOME, 'GET');
}

export const updateIncomeStatus = (outcomeId, status, newDate) => {
    return sendRequest(`${INCOME}/${outcomeId}${UPDATE_STATUS}`, 'PUT', { status, newDate });
}