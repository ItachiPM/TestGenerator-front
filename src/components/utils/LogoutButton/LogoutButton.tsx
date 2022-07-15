import React from "react";
import {useNavigate} from "react-router-dom";
import {apiUrl} from "../../../config/api";

export const LogoutButton = () => {
    const navigate = useNavigate()

    const logoutFunction = async () => {
        const res = await fetch(`${apiUrl}/auth/logout`, {
            method: 'Post',
            headers: {
                'content-type': 'application/json',
            },
            credentials: "include",
        })
        const data = await res.json();
        if(data.isLogout) {
            navigate('/login')
        }
    }

    return <button className="logout--button" onClick={logoutFunction}>Wyloguj</button>

}
