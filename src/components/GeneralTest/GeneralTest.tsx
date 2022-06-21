import React, {useEffect, useState} from "react";
import {Loader} from "../Loader/Loader";
import {fetchFunction} from "../utils/fetchFunction";
import {TestForm} from "../TestComponents/TestForm/TestForm";
import {TestQuestionsResponse} from "types";



export const GeneralTest = () => {

    const [questions, setQuestions] = useState<TestQuestionsResponse[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            setQuestions(await fetchFunction('test/general'))
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
