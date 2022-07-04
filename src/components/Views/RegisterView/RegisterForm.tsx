import React, {FormEvent, useState} from "react";

interface Props {
    onHandleRegister: () => void;
}

export const RegisterForm = (props: Props) => {
    const {onHandleRegister} = props


    const [newUser, setNewUser] = useState({
        login: '',
        password: '',
        confirmPassword: '',
    })
    const [error, setError] = useState<string | null>(null)

    const sendForm = async (e: FormEvent) => {
        e.preventDefault()

        if (newUser.login.length === 0) {
            return setError('Podaj nazwę użytkownika')
        }
        if (newUser.password !== newUser.confirmPassword) {
            return setError('Podane hasła nie są identyczne')
        }

        try {
            const res = await fetch('http://localhost:3001/login/register', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    login: newUser.login,
                    password: newUser.password
                })
            })
            const data = await res.json()
            if (!res.ok) {
                return setError(data)
            }
            if (data.isSuccess) {
                onHandleRegister()
            }
        } catch (e) {
            console.log(e)
        }
    }

    return <form onSubmit={sendForm}>
        {error ? <p className="error">{error}</p> : null}
        <label>
            <p>Nazwa Użytkownika</p>
            <input className={error === 'Podaj nazwę użytkownika' ? 'errorInput' : undefined} type="text"
                   value={newUser.login} onChange={e => setNewUser({
                ...newUser,
                login: e.target.value,
            })}/>
        </label>

        <label>
            <p>Hasło</p>
            <input type="password" value={newUser.password} onChange={e => setNewUser({
                ...newUser,
                password: e.target.value,
            })}/>
        </label>
        <label>
            <p>Powtórz Hasło</p>
            <input className={error === 'Podane hasła nie są identyczne' ? 'errorInput' : undefined} type="password"
                   value={newUser.confirmPassword} onChange={e => setNewUser({
                ...newUser,
                confirmPassword: e.target.value,
            })}/>
        </label>

        <p>
            <button type='submit'>Wyślij</button>
        </p>
    </form>
}
