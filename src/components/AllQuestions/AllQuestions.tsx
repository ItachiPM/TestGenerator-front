import React, {useEffect, useState} from "react";
import {BackButton} from "../utils/BackButton/BackButton";
import {VisibleQuestion} from "../VisibleQuestion/VisibleQuestion";
import {ListQuestionEntity} from "types"

import './AllQuestions.css'
import {Loader} from "../../Loader/Loader";

export const AllQuestions = () => {

    const [questions, setQuestions] = useState<ListQuestionEntity[]>([])
    const [load, setLoad] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            setLoad(true)
            const res = await fetch('http://localhost:3001/questions');
            const date = await res.json();
            setQuestions(date)
            setLoad(false)
        })();
    }, [])

    return <div className="AllQuestions">
        <div className="AllQuestions--back-button"><BackButton/></div>
        <div className="AllQuestions--title"><h1>Wszystkie Pytania</h1></div>
        <div className="AllQuestions--container">
            {load ? <Loader/> : questions.map(question => <VisibleQuestion key={question.id} questionEntity={question}/>)}
        </div>
    </div>;
}
