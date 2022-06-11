import React, {useEffect, useState} from "react";
import {BackButton} from "../BackButton/BackButton";
import {VisibleQuestion} from "../VisibleQuestion/VisibleQuestion";
import {ListQuestionEntity} from "types"

import './AllQuestions.css'

export const AllQuestions = () => {

    const [questions, setQuestions] = useState<ListQuestionEntity[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/questions');
            const date = await res.json();
            setQuestions(date)
        })();
    }, [])

    return <div className="AllQuestions">
        <div className="AllQuestions--back-button"><BackButton/></div>
        <div className="AllQuestions--title"><h1>Wszystkie Pytania</h1></div>
        <div className="AllQuestions--container">
            {questions.map(question => <VisibleQuestion key={question.id} questionEntity={question}/>)}
        </div>
    </div>;
}
