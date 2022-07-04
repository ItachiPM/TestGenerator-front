import React from "react";
import {Navigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {

    const [cookies] = useCookies(['session_id']);

    return <>
        {cookies.session_id ? children : <Navigate to='/login'/>}
    </>
}
