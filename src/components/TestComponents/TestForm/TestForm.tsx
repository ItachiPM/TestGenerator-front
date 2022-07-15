import React, {FormEvent, useState} from "react";
import {TestResult} from "../TestResult/TestResult";
import {SingleQuestionToTest} from "../SingleQuestionToTest/SingleQuestionToTest";
import {TestQuestionsResponse} from "types";

import './TestForm.css'

interface Props {
    questions: TestQuestionsResponse[];
}

export const TestForm = (props: Props) => {
    const {questions} = props;

    const [result, setResult] = useState<number[]>(Array(questions.length))
    const [done, setDone] = useState<boolean>(false)


    const sendForm = (e: FormEvent) => {
        e.preventDefault()
        setResult(result)
        setDone(true)
    }

    return <>{!done ? <form className="TestForm" onSubmit={sendForm}>
            <div className="header"><h1>Test Ogólny</h1></div>
            <div className="TestQuestion">
                {questions.map(question =>
                    <SingleQuestionToTest
                        result={result}
                        key={question.id}
                        answers={question.answers}
                        question={question.question}
                        number={questions.indexOf(question) + 1}
                    />
                )}
            </div>
            <button className="end--test" type="submit">Zakończ</button>
        </form>
        :
        <TestResult result={result}/>
    }</>
}
