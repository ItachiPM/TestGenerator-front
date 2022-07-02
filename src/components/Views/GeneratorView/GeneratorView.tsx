import React from "react";
import {Link} from "react-router-dom";
import {BackButton} from "../../utils/BackButton/BackButton";
import {Title} from "../../utils/Title/Title";

import './GeneratorView.css';


export const GeneratorView = () => {
    return <div className="GeneratorView">
        <Title/>
        <h2>Rozwiąż Test</h2>
        <Link className="Link" to="/generator/general">Całościowy</Link>
        <Link className="Link" to="/generator/module">Pojedyńczy przedmiot</Link>
        <BackButton/>
    </div>
}
