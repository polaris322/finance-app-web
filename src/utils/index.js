import axios from 'axios';
import {BASE_URL} from '../config/API';
import {AUTH_COOKIE} from '../config/key';

export const sendRequest = async (uri, method, payload, isFormData = false) => {
    const auth = getCookie(AUTH_COOKIE);
    let token = '';

    if (auth) {
        // eslint-disable-next-line prefer-destructuring
        token = auth;
    }

    let headers = {
        Authorization: `Bearer ${token}`
    };

    if (isFormData) {
        headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
        };
    }

    return axios.request({
        url: `${BASE_URL}${uri}`,
        method,
        headers,
        data: payload
    })
    .then(res => {
        return {
            success: true,
            code: res.status,
            data: res.data
        }
    })
    .catch(err => {
        if (err.response) {
            if (err.response.status === 401) {
                document.location.href = "/login";
            }
            return {
                success: false,
                code: err.response.status,
                data: err.response.data
            };
        }
        return {
            success: false,
            code: 501,
            data: 'The API server is not running now.'
        };
    });
}

export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }
  
export function getCookie(cname) {
    const name = cname + '=';
    const ca = document.cookie.split(';');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
        }
    }
    return '';
}

export const NumberFormater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const getObjectByValue = (obj, value) => {
    return obj.find(item => item.value === value);
};

export function getFirstErrorMessage(responseObj) {
    if (responseObj && responseObj.errors) {
        const errorEntries = Object.entries(responseObj.errors);
        if (errorEntries.length > 0) {
            const [, errorValue] = errorEntries[0];
            if (Array.isArray(errorValue)) {
                return errorValue[0];
            } else if (typeof errorValue === 'string') {
                return errorValue;
            }
        }
    }
    return null; // Return null if no error message is found
}
