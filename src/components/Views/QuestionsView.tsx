import React from "react";
import { Link } from "react-router-dom";
import {BackButton} from "../utils/BackButton/BackButton";
import {Title} from "../utils/Title/Title";

import './QuestionsView.css'

export const QuestionsView = () => (
    <div className="QuestionsView">
        <Title/>
        <h2>Pytania</h2>
        <Link className="Link" to="/questions/all">Wszystkie</Link>
        <Link className="Link" to="/questions/module">Podgląd Pytań</Link>
        <Link className="Link" to="/questions/add">Dodaj Pytanie</Link>
        <BackButton/>
    </div>
)
