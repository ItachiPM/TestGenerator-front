import React from "react";
import {Link} from "react-router-dom";
import {BackButton} from "../BackButton/BackButton";
import {Title} from "../../Title/Title";

import './GeneratorView.css';


export const GeneratorView = () => {
    return <div className="GeneratorView">
        <Title/>
        <h2>Rozwiąż Test</h2>
        <Link className="Link" to="/questions/all">Całościowy</Link>
        <Link className="Link" to="/questions/module">Pojedyńczy przedmiot</Link>
        <BackButton/>
    </div>
}
