import React, { createContext, useState, useEffect } from 'react';
import { LOGIN, LOGOUT, ME } from '../config/API';
import { getCookie, sendRequest, setCookie } from '../utils';
import { AUTH_COOKIE } from '../config/key';
import {fetchProjects} from "../services/ProjectService";
import {updateProjectList} from "../store/actions/projects";
import {useDispatch} from "react-redux";
import {fetchActivities} from "../services/ActivityService";
import {updateActivityList} from "../store/actions/activities";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
    });
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


            // set projects
            fetchProjects().then(res =>{
                if (res.success) {
                    dispatch(updateProjectList(res.data));
                }
            });

            // set activities
            fetchActivities().then(res =>{
                if (res.success) {
                    dispatch(updateActivityList(res.data));
                }
            });
        }
    }, [token, dispatch]);

    const login = async (email, password) => {
        const response = await sendRequest(LOGIN, 'POST', { email, password });
        if (response.success){
            setToken(response.data.token);
            setCookie(AUTH_COOKIE, response.data.token, 1);

            const userResponse = await sendRequest(ME, 'GET');
            if(userResponse.success){
                setUser(userResponse.data);
            }
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
