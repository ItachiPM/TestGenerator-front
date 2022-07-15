import React from "react";
import {apiUrl} from "../../../config/api";
import { UserResponseForAdmin } from "types";


interface Props {
    user: UserResponseForAdmin,
    setIsDeleteElement: (s: boolean) => void
}

export const AdminSingleUserPreview = (props: Props) => {
    const {user, setIsDeleteElement} = props

    const deleteFunction = async () => {
        if (window.confirm('czy napewno chcesz usunąć to pytanie ?')) {
            const res = await fetch(`${apiUrl}/users/${user.id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
            })
            if (!res.ok) {
                alert(`${await res.json()}`)
            } else {
                const data = await res.json()
                alert(data.ok)
                setIsDeleteElement(true)
            }
        }
    }

    return <tr>
        <td>{user.id}</td>
        <td>{user.login}</td>
        <td>
            <button onClick={() => deleteFunction()}>🗑</button>
        </td>
    </tr>
}
