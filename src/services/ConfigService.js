import {sendRequest} from "../utils";
import {CONFIGURATION, UPDATE_AHORRO, UPDATE_EMERGENCY} from "../config/API";

export const getConfiguration = () => {
    return sendRequest(`${CONFIGURATION}`, 'GET');
}

export const updateEmergencyFund = (amount) => {
    return sendRequest(`${CONFIGURATION}${UPDATE_EMERGENCY}`, 'PUT', {emergency: amount});
}

export const updateAhorroFund = (amount) => {
    return sendRequest(`${CONFIGURATION}${UPDATE_AHORRO}`, 'PUT', {ahorro: amount});
}