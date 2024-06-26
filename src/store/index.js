import {combineReducers, createStore} from "redux";
import { projectReducer } from './reducers/projects';
import {activityReducer} from "./reducers/activities";

const rootReducer = combineReducers({
    project: projectReducer,
    activity: activityReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);