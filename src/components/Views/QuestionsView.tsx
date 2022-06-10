import React from "react";
import { Link } from "react-router-dom";

import './QuestionsView.css'
import {BackButton} from "../BackButton/BackButton";

export const QuestionsView = () => {
    return <div className="QuestionsView">
        <h1>Genertor magisterki</h1>
        <h2>Pytania</h2>
        <Link className="Link" to="/questions/all">Wszystkie</Link>
        <Link className="Link" to="/questions/module">Przedmioty</Link>
        <Link className="Link" to="/questions/add">Dodaj Pytanie</Link>
        <BackButton/>
    </div>
}
