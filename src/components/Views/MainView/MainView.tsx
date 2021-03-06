import React from "react";
import {Link} from "react-router-dom";
import {Title} from "../../utils/Title/Title";
import {LogoutButton} from "../../utils/LogoutButton/LogoutButton";

import './MainView.css';

export const MainView = () => {


    return <div className="MainView">
        <Title/>

        <Link className="Link" to="/generator">Generuj test</Link>
        <Link className="Link" to="/questions">Pytania</Link>

        <LogoutButton/>
    </div>
}
