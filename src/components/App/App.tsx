import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {GeneratorView} from "../Views/GeneratorView";
import {QuestionsView} from "../Views/QuestionsView";
import {AllQuestions} from "../AllQuestions/AllQuestions";
import {MainView} from "../Views/MainView";
import {GeneralTest} from "../GeneralTest/GeneralTest";
import {AllQuestionsFromModule} from "../AllQuestionsFromModule/AllQuestionsFromModule";
import {AddQuestion} from "../AddQuestion/AddQuestion";
import {fetchFunction} from "../utils/fetchFunction";
import { ModuleContext } from '../utils/context/module.context';
import {Module} from 'types';

import './App.css';



export const App = () => {

    const [moduleList, setModuleList] = useState<Module[]>([])

    useEffect(() => {
        (async () => {
            const data = await fetchFunction(`modules`);
            setModuleList(data)
        })()
    }, []);

    return <ModuleContext.Provider value={{moduleList, setModuleList}}>
        <div className='App'>

            <Routes>
                <Route path="/" element={<MainView/>}/>
                <Route path="/generator" element={<GeneratorView/>}/>
                <Route path="/generator/general" element={<GeneralTest/>}/>
                <Route path="/generator/module" element={<GeneralTest/>}/>


                <Route path="/questions" element={<QuestionsView/>}/>
                <Route path="/questions/module" element={<AllQuestionsFromModule/>}/>
                <Route path="/questions/all" element={<AllQuestions/>}/>
                <Route path="/questions/add" element={<AddQuestion/>}/>
            </Routes>
        </div>
    </ModuleContext.Provider>
}
