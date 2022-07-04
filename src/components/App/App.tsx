import React, { useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {GeneratorView} from "../Views/GeneratorView/GeneratorView";
import {RegisterView} from "../Views/RegisterView/RegisterView";
import {QuestionsView} from "../Views/QuestionsView/QuestionsView";
import {AllQuestions} from "../AllQuestions/AllQuestions";
import {MainView} from "../Views/MainView/MainView";
import {GeneralTest} from "../GeneralTest/GeneralTest";
import {AllQuestionsFromModule} from "../AllQuestionsFromModule/AllQuestionsFromModule";
import {AddQuestion} from "../AddQuestion/AddQuestion";
import {fetchFunction} from "../utils/fetchFunction";
import {ModuleTestSettings} from "../ModuleTestSettings/ModuleTestSettings";
import {NotFoundView} from "../Views/NotFoundView/NotFoundView";
import {ModuleTest} from "../ModuleTest/ModuleTest";
import {LoginView} from "../Views/LoginView/LoginView";
import {AuthProvider} from "../utils/login/AuthProvider";
import {ProtectedRoute} from "../utils/login/ProtectedRoute";
import {ModuleContext} from '../utils/context/module.context';
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

    return <AuthProvider>
        <ModuleContext.Provider value={{moduleList, setModuleList}}>
            <div className='App'>

                <Routes>
                    <Route path="login" element={<LoginView/>}/>
                    <Route path="login/register" element={<RegisterView/>}/>

                    <Route path="/" element={<ProtectedRoute><MainView/></ProtectedRoute>}/>

                    <Route path="generator" element={<ProtectedRoute><GeneratorView/></ProtectedRoute>}/>
                    <Route path="generator/general" element={<ProtectedRoute><GeneralTest/></ProtectedRoute>}/>
                    <Route path="generator/module" element={<ProtectedRoute><ModuleTestSettings/></ProtectedRoute>}/>
                    <Route path="generator/module/:moduleName/:questionCount" element={<ProtectedRoute><ModuleTest/></ProtectedRoute>}/>


                    <Route path="questions" element={<ProtectedRoute><QuestionsView/></ProtectedRoute>}/>
                    <Route path="questions/module" element={<ProtectedRoute><AllQuestionsFromModule/></ProtectedRoute>}/>
                    <Route path="questions/all" element={<ProtectedRoute><AllQuestions/></ProtectedRoute>}/>
                    <Route path="questions/add" element={<ProtectedRoute><AddQuestion/></ProtectedRoute>}/>
                    <Route path="*" element={<NotFoundView/>}/>
                </Routes>
            </div>
        </ModuleContext.Provider>
    </AuthProvider>

}
