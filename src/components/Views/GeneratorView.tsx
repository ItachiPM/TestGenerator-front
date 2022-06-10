import React from "react";
import {Link} from "react-router-dom";

import './GeneratorView.css';
import {BackButton} from "../BackButton/BackButton";

export const GeneratorView = () => {
    return <div className="GeneratorView">
        <h1>Genertor magisterki</h1>
        <h2>Rozwiąż Test</h2>
        <Link className="Link" to="/questions/all">Całościowy</Link>
        <Link className="Link" to="/questions/module">Pojedyńczy przedmiot</Link>
        <BackButton/>
    </div>
}
