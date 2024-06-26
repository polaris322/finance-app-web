import { REGISTER } from "../config/API";
import { sendRequest } from "../utils";

export const registerUser = (firstName, lastName, phone, email, password) => {
    return sendRequest(REGISTER, 'POST', { firstName, lastName, phone, email, password });
}