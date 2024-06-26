import { sendRequest } from "../utils";
import {ACTIVITY, TASK, UPDATE_STATUS} from "../config/API";

export const createActivity = (activityName) => {
    return sendRequest(ACTIVITY, 'POST', {name: activityName});
}

export const createActivityTask = (activityId, name, amount, payment_method, status, start_date, end_date) => {
    return sendRequest(
        `${ACTIVITY}/${activityId}${TASK}`,
        'POST',
        {
            name,
            amount,
            payment_method,
            status,
            start_date,
            end_date
        }
    );
}

export const fetchActivities = () => {
    return sendRequest(ACTIVITY, 'GET');
}

export const updateActivityTaskStatus = (activityId, taskId, status) => {
    return sendRequest(`${ACTIVITY}/${activityId}${TASK}/${taskId}${UPDATE_STATUS}`, 'PUT', {status});
}