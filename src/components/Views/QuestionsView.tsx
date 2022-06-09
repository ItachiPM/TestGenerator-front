import React from "react";
import { Link } from "react-router-dom";

export const QuestionsView = () => {
    return <>
        <h1>Pytania</h1>
        <Link to="/questions/all">Wszystkie</Link>
        <Link to="/questions/module">Przedmioty</Link>
        <Link to="/questions/add">Dodaj</Link>
    </>
}
