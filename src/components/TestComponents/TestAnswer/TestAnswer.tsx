import React from "react";

interface Props {
    handlePointAnswer: (index:number, point: number) => void;
    question: string
    answer: string;
    point: number;
    numberOfQuestion: number;
}

export const TestAnswer = (props: Props) => {
    const {handlePointAnswer ,answer, question, point, numberOfQuestion} = props

    return <label key={answer} htmlFor={question}>
        <input
            type="radio"
            name={question}
            value={point}
            onChange={e => handlePointAnswer(numberOfQuestion,Number(e.target.value))}
        />
        {answer}
    </label>
}
