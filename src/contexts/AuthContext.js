import React, { createContext, useState, useEffect } from 'react';
import { LOGIN, LOGOUT, ME } from '../config/API';
import { getCookie, sendRequest, setCookie } from '../utils';
import { AUTH_COOKIE } from '../config/key';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(getCookie(AUTH_COOKIE) || null);

    useEffect(() => {
        if (token) {
            sendRequest(ME, 'GET')
                .then(response => {
                    if (response.success){
                        setUser(response.data);
                    }
                })
                .catch(() => setToken(null));
        }
    }, [token]);

    const login = async (email, password) => {
        const response = await sendRequest(LOGIN, 'POST', { email, password });
        if (response.success){
            setToken(response.data.token);
            setCookie(AUTH_COOKIE, response.data.token, 1);
        }      

        const userResponse = await sendRequest(ME, 'GET');
        if(userResponse.success){
            setUser(userResponse.data);
        }

        return response;
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        sendRequest(LOGOUT, 'POST');
        setCookie(AUTH_COOKIE, '', -1);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
