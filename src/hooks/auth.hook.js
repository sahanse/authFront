import authService from "../services/auth.service.js"
import { useSelector, useDispatch } from "react-redux"
import {login, logout} from "../store/slice/auth.slice.js"
import { useState } from "react"
import { data } from "autoprefixer";

const userAuthHook = ()=>{
    const dispatch = useDispatch();

    const [authError, setAuthError] = useState(null);
    const [authLoading, setAuthLoading] = useState(false);

    const userAuthFunc = async(code)=>{
        setAuthLoading(true);
        try {
            const response = await authService.auth(code);
            dispatch(login(response));
            setAuthError(null);
            return "success"
        } catch (error) {
            setAuthError(error.response.data.message)
        }finally{
            setAuthLoading(false);
        }
    }

    return {authError, authLoading, userAuthFunc}
};


const userLogoutHook = ()=>{
    const dispatch = useDispatch();
    const [logoutError, setLogoutError] = useState(null);
    const [logoutLoading, setLogoutLoading] = useState(false);

    const userLogoutFunc = async(code)=>{
        setLogoutLoading(true);

        try {
            const response = await authService.logout(data);
            dispatch(logout());
            setLogoutError(null);
        } catch (error) {
            setLogoutError(error.response.data.message)
        }finally{
            setLogoutLoading(false)
        }
    };

    return {logoutError, logoutLoading, userLogoutFunc}
}

export {
    userAuthHook,
    userLogoutHook
}
