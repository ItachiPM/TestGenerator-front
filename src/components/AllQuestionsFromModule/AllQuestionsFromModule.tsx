import React, {useEffect, useState} from "react";
import {BackButton} from "../utils/BackButton/BackButton";
import {VisibleQuestion} from "../VisibleQuestion/VisibleQuestion";
import {ListQuestionEntity} from "types";
import {Loader} from "../../Loader/Loader";

import './AllQuestionsFromModule.css'
import {ModuleButtons} from "../utils/ModuleButtons/ModuleButtons";

export const AllQuestionsFromModule = () => {

    const [questions, setQuestions] = useState<ListQuestionEntity[]>([]);
    const [module, setModule] = useState<string>('');
    const [load, setLoad] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setLoad(true)
            const res = await fetch(`http://localhost:3001/questions/${module}`);
            const date = await res.json();
            setQuestions(date)
            setLoad(false)
        })();
    }, [module])

    const handleModuleButton = (module: string) => {
        setModule(module);
    }

    return <div className="AllQuestionsFromModule">
        <div className="AllQuestionsFromModule--title"><h1>Wszystkie Pytania</h1></div>
        <div className="AllQuestionsFromModule--menu">
            <ModuleButtons handleModuleButton={handleModuleButton}/>
            <BackButton/>
        </div>
        <div className="AllQuestionsFromModule--container">
            {load ? <Loader/> : questions === null ? null : questions.map(question => <VisibleQuestion key={question.id} questionEntity={question}/>)}
        </div>
    </div>;
}
