import authService from "../services/auth.service.js"
import { useSelector, useDispatch } from "react-redux"
import {login, logout} from "../store/slice/auth.slice.js"
import { useState } from "react"

const userLoginHook = ()=>{
    const dispatch = useDispatch();

    const [loginError, setLoginError] = useState(null);
    const [loginLoading, setLoginLoading] = useState(false);

    const userLoginFunc = async(code)=>{
        setLoginLoading(true);

        try {
            const response = await authService.login(code);
            dispatch(login(response));
            setLoginError(null);
        } catch (error) {
            setLoginError(error.response.data.message)
        }finally{
            setLoginLoading(false);
        }
    }

    return {loginError, loginLoading, userLoginFunc}
};

const userRegisterHook = ()=>{
    const dispatch = useDispatch();
    const [registerError, setRegisterError] = useState(null);
    const [registerLoading, setRegisterLoading] = useState(false);

    const userRegisterFunc = async(code)=>{
        setRegisterLoading(true);
        try {
            const response = await authService.register(code);
            dispatch(login(response));
            setRegisterError(null);
        } catch (error) {
            setRegisterError(error.response.data.message);
        }finally{
            setRegisterLoading(true);
        }
    };

    return {registerError, registerLoading, userRegisterFunc};
};

const userLogoutHook = ()=>{
    const dispatch = useDispatch();
    const [logoutError, setLogoutError] = useState(null);
    const [logoutLoading, setLogoutLoading] = useState(false);

    const userLogoutFunc = async(code)=>{

    }
}
