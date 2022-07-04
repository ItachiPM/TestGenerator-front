import React, {FormEvent, useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Title} from "../../utils/Title/Title";
import {LoginContext} from "../../utils/context/login.contex";
import { User } from "types";

import './LoginView.css'
import {apiUrl} from "../../../config/api";


export const LoginView = () => {

    const {onLogin} = useContext(LoginContext)

    const [user, setUser] = useState<User>({
        login: '',
        pwdHash: '',
    })
    const [error, setError] = useState<string | null>(null)

    const sendForm = async (e: FormEvent) => {
        e.preventDefault()


        if(user.pwdHash.length === 0) {
            setError('Podaj Hasło')
        }
        if(user.login.length === 0) {
            setError('Podaj nazwę użytkownika')
        }

        if(user.login.length !== 0 && user.pwdHash.length !== 0) {
            try {
                const res = await fetch(`${apiUrl}/login`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    credentials: "include",
                    body: JSON.stringify(user)
                })
                const data = await res.json()
                if(!data.isSuccess) {
                    setError(data.mess)
                } else {
                    onLogin();
                }
            } catch (e) {
                console.log(e)
            }
        }
    }

    return <div className="LoginView">
        <Title/>
        <form onSubmit={sendForm}>
            {error ? <p className="error">{error}</p> : null}
            <label>
                <p>Nazwa Użytkownika</p>
                <input type="text" value={user.login} onChange={e => setUser({
                    ...user,
                    login: e.target.value,
                })}/>
            </label>

            <label>
                <p>Hasło</p>
                <input type="password" value={user.pwdHash} onChange={e => setUser({
                    ...user,
                    pwdHash: e.target.value,
                })}/>
            </label>

            <p>
                <button type='submit'>Zaloguj</button>
            </p>
        </form>
        <Link className="Link" to='register'>Zarejestruj się!</Link>
    </div>
}
