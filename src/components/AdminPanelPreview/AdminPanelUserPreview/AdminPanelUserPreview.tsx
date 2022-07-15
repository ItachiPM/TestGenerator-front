import React from "react";
import {AdminSingleUserPreview} from "./AdminSingleUserPreview";
import { UserResponseForAdmin } from "types";

interface Props {
    userData: UserResponseForAdmin[],
    setIsDeleteElement: (s: boolean) => void
}

export const AdminPanelUserPreview = (props: Props) => {
    const {userData, setIsDeleteElement} = props

    return <div className="user--preview">
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Login</th>
            </tr>
            </thead>
            <tbody>
            {userData.map(user => <AdminSingleUserPreview setIsDeleteElement={setIsDeleteElement} key={user.id} user={user}/>)}
            </tbody>
        </table>
    </div>
}
