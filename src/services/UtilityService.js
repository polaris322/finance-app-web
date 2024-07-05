import {sendRequest} from "../utils";
import {UTILITIES} from "../config/API";

export const fetchUtilities = () => {
    return sendRequest(UTILITIES, 'GET');
}

export const saveNewUtility = (emergency, ahorro) => {
    let payload = {
        emergency, ahorro
    }
    if (!emergency) delete payload.emergency;
    if (!ahorro) delete payload.ahorro;

    return sendRequest(UTILITIES, 'POST', payload);
}