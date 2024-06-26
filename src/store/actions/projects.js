import {UPDATE_PROJECT_LIST} from "../types/projects";

export const updateProjectList = (projects) => ({
    type: UPDATE_PROJECT_LIST,
    payload: projects,
});