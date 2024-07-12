import {UPDATE_SIDE_MENU_STATUS} from "../types/layout";

const INIT_STATE = {
    showSideMenuText: true
};

export const layoutReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case UPDATE_SIDE_MENU_STATUS:
            return {
                ...state,
                showSideMenuText: action.payload,
            };
        default:
            return { ...state };
    }
};