import React from "react";
import { ListQuestionEntity } from "types";

import './VisibleQuestion.css';

interface Props {
    questionEntity: ListQuestionEntity
}

export const VisibleQuestion = (props: Props) => {
    const question = props.questionEntity

    return <div className="VisibleQuestion">
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
