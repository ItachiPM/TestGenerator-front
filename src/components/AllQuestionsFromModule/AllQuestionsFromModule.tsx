import React, {useEffect, useState} from "react";
import {BackButton} from "../utils/BackButton/BackButton";
import {VisibleQuestion} from "../VisibleQuestion/VisibleQuestion";
import {ModuleButton} from "../utils/ModuleButton/ModuleButton";
import {ListQuestionEntity , Module} from "types"

import './AllQuestionsFromModule.css'

export const AllQuestionsFromModule = () => {

    const [modules, setModules] = useState<Module[]>([])
    const [questions, setQuestions] = useState<ListQuestionEntity[]>([])
    const [module, setModule] = useState<string>('')

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/modules`);
            const date = await res.json();
            setModules(date)
            setModule(date[0].module)
        })();
    }, [])

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/questions/${module}`);
            const date = await res.json();
            setQuestions(date)
        })();
    }, [module])


    const handleModuleButton = (module: string) => {
        setModule(module);
    }

    return <div className="AllQuestionsFromModule">
        <div className="AllQuestionsFromModule--menu">
                {modules.map(module => <ModuleButton key={module.id} onHandle={handleModuleButton} module={module.module}/>)}
            <BackButton/>
        </div>
        <div className="AllQuestionsFromModule--title"><h1>Wszystkie Pytania</h1></div>
        <div className="AllQuestionsFromModule--container">
            {questions === null ? null : questions.map(question => <VisibleQuestion key={question.id} questionEntity={question}/>)}
        </div>
    </div>;
}
