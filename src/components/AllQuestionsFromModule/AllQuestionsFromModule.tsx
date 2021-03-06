import React, {useEffect, useState} from "react";
import {PreviewQuestion} from "../PreviewQuestion/PreviewQuestion";
import {Loader} from "../Loader/Loader";
import {ModuleButtons} from "../utils/ModuleButtons/ModuleButtons";
import {BackButton} from "../utils/BackButton/BackButton";
import {fetchFunction} from "../utils/fetchFunction";
import {ListQuestionEntity} from "types";

import './AllQuestionsFromModule.css'

export const AllQuestionsFromModule = () => {

    const [questions, setQuestions] = useState<ListQuestionEntity[]>([]);
    const [module, setModule] = useState<string | null>('');
    const [wait, setWait] = useState<boolean>(true)
    const [load, setLoad] = useState<boolean>(false);


    useEffect(() => {
        (async () => {
            const data = await fetchFunction(`modules`)
            setModule(data[0].module)
            setWait(false)
        })();
    }, [])

    useEffect(() => {
        (async () => {
            setLoad(true)
            if(!wait) {
                setQuestions(await fetchFunction(`questions/module/${module}`))
            }
            setLoad(false)
        })();
    }, [module])

    const handleModuleButton = (module: string) => {
        setModule(module);
    }

    return <div className="AllQuestionsFromModule">
        <div className="AllQuestionsFromModule--title"><h1>Pytania</h1></div>
        <div className="AllQuestionsFromModule--menu">
            <ModuleButtons handleModuleButton={handleModuleButton}/>
            <BackButton/>
        </div>
        <div className="AllQuestionsFromModule--container">
            {load ? <Loader/> : questions === null ? null : questions.map(question => <PreviewQuestion key={question.id} questionEntity={question}/>)}
        </div>
    </div>;
}
