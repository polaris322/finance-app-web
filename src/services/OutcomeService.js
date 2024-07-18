import { sendRequest } from "../utils";
import {INCOME, OUTCOME, UPDATE_STATUS} from "../config/API";

export const createOutcome = (formData) => {
    return sendRequest(
        OUTCOME,
        'POST',
        formData,
        true
    );
}

export const fetchOutcomes = () => {
    return sendRequest(OUTCOME, 'GET');
}

export const fetchIncomes = () => {
    return sendRequest(INCOME, 'GET');
}

export const updateOutcomeStatus = (outcomeId, status, newDate) => {
    return sendRequest(`${OUTCOME}/${outcomeId}${UPDATE_STATUS}`, 'PUT', { status, newDate });
}