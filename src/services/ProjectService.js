import { sendRequest } from "../utils";
import {PROJECT, TASK, UPDATE_STATUS} from "../config/API";

export const createProject = (projectName) => {
    return sendRequest(PROJECT, 'POST', {name: projectName});
}

export const createProjectTask = (project_id, name, amount, payment_method, status, start_date, end_date) => {
    return sendRequest(
        `${PROJECT}/${project_id}${TASK}`,
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

export const fetchProjects = () => {
    return sendRequest(PROJECT, 'GET');
}

export const updateProjectTaskStatus = (projectId, taskId, status) => {
    return sendRequest(`${PROJECT}/${projectId}${TASK}/${taskId}${UPDATE_STATUS}`, 'PUT', {status});
}