import React, {useEffect, useState} from "react";
import {BackButton} from "../utils/BackButton/BackButton";
import {PreviewQuestion} from "../PreviewQuestion/PreviewQuestion";
import {Loader} from "../Loader/Loader";
import {fetchFunction} from "../utils/fetchFunction";
import {ListQuestionEntity} from "types"

import './AllQuestions.css'

export const AllQuestions = () => {

    const [questions, setQuestions] = useState<ListQuestionEntity[]>([])
    const [load, setLoad] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            setLoad(true)
            const data = await fetchFunction('questions')
            setQuestions(data)
            setLoad(false)
        })();
    }, [])

    return <div className="AllQuestions">
        <div className="AllQuestions--back-button"><BackButton/></div>
        <div className="AllQuestions--title"><h1>Wszystkie Pytania</h1></div>
        <div className="AllQuestions--container">
            {load ? <Loader/> : questions.map(question => <PreviewQuestion key={question.id} questionEntity={question}/>)}
        </div>
    </div>;
}
