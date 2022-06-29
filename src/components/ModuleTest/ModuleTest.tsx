import React, {useEffect, useState} from "react";
import {fetchFunction} from "../utils/fetchFunction";
import {Loader} from "../Loader/Loader";
import {TestForm} from "../TestComponents/TestForm/TestForm";
import {useParams} from "react-router-dom";
import { TestQuestionsResponse } from "types";

export const ModuleTest = () => {

    const {moduleName, questionCount} = useParams()

    const [questions, setQuestions] = useState<TestQuestionsResponse[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            setQuestions(await fetchFunction(`test/module/${moduleName}/${questionCount}`))
            setLoading(false)
        })();
    }, [])

    return <div>
        {loading ?
            <Loader/>
            :
            <TestForm questions={questions}/>
        }
    </div>
}
