import {combineReducers, createStore} from "redux";
import { projectReducer } from './reducers/projects';
import {activityReducer} from "./reducers/activities";
import {incomeReducer} from "./reducers/incomes";
import {outcomeReducer} from "./reducers/outcomes";

const rootReducer = combineReducers({
    project: projectReducer,
    activity: activityReducer,
    income: incomeReducer,
    outcome: outcomeReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);