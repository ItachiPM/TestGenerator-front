import React from "react";
import {Link} from "react-router-dom";

import './RegisterView.css'

export const CorrectRegister = () => {
    return <div className="CorrectRegister">
        <p>Rejestracja powiodła się.</p>
        <Link className="Link" to="/login">Zaloguj się!</Link>
    </div>
}
