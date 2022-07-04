import React from "react";
import {BackButton} from "../../utils/BackButton/BackButton";

import './TestResult.css'

interface Props {
    result: number[];
}

export const TestResult = (props: Props) => {
    const {result} = props

    const score = result.reduce((prev, curr) => (prev + curr), 0)

    return <div className="TestResult">
        <h1>{score > result.length/2 ? 'Gratulacje Zdane' : 'No niestety, trochę za mało żeby zdać'}</h1>
        <p>Twój wynik to <strong>{score}</strong> poprawnych odpowiedzi na <strong>{result.length} ({(score/result.length)*100}%)</strong></p>
        <BackButton/>
    </div>
}
