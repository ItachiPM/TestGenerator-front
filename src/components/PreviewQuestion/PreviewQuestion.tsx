import React from "react";
import { ListQuestionEntity } from "types";

import './PreviewQuestion.css';

interface Props {
    questionEntity: ListQuestionEntity
}

export const PreviewQuestion = (props: Props) => {
    const question = props.questionEntity

    return <div className="PreviewQuestion">
        <div className="module">
            <p>
                {question.module}
            </p>
        </div>
        <div className="question">
            <p>
                {question.question} ?
            </p>
        </div>
        <div className="answer">
            <p>{question.answer}</p>
        </div>
    </div>
}
