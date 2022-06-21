import React from "react";
import {Answer} from "types";

import './SingleQuestionToTest.css'
import {TestAnswer} from "../TestAnswer/TestAnswer";

interface Props {
    result: number[]
    number: number;
    question: string;
    answers: Answer[];
}

export const SingleQuestionToTest = (props: Props) => {
    const {result, question, answers, number} = props;

    const onHandleAnswer = (index: number, point: number) => {
        result[index -1] = point;
    }

    return <div className="SingleQuestionToTest">
        <div className="question">
            <h1>{number}. {question} ?</h1>
        </div>
        <div className="answer">
            {answers.map(answer => answer.answer === null ? null
                :
                <TestAnswer key={answer.id}
                            question={question}
                            answer={answer.answer}
                            point={answer.points}
                            numberOfQuestion={number}
                            handlePointAnswer={onHandleAnswer}
                />
            )}
        </div>
    </div>
}
