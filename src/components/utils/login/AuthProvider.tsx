import React from "react";
import { LoginContext } from "../context/login.contex";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate()

    const [cookies] = useCookies(['session_id'])

    const handleLogin = () => {
        navigate('/')
    }

    const value = {
        cookie: cookies.session_id,
        onLogin: handleLogin,
    }


    return <LoginContext.Provider value={value}>
        {children}
    </LoginContext.Provider>
}
