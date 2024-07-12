import {UPDATE_SIDE_MENU_STATUS} from "../types/layout";

export const updateSidemenuStatus = (showSidemenu) => ({
    type: UPDATE_SIDE_MENU_STATUS,
    payload: showSidemenu,
});