import React from "react";
import {Link} from "react-router-dom";

import './MainView.css';

export const MainView = () => {
    return <div className="MainView">
        <h1>Genertor magisterki</h1>

        <Link className="Link" to="/generator">Generuj test</Link>
        <Link className="Link" to="/questions">Pytania</Link>
    </div>
}
