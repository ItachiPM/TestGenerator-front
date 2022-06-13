import React from 'react';
import {Route, Routes} from "react-router-dom";
import {GeneratorView} from "../Views/GeneratorView";
import {QuestionsView} from "../Views/QuestionsView";

import './App.css';
import {AllQuestions} from "../AllQuestions/AllQuestions";
import {MainView} from "../Views/MainView";
import {AllQuestionsFromModule} from "../AllQuestionsFromModule/AllQuestionsFromModule";



export const App = () => {
  return <div className='App'>

    <Routes>
      <Route path="/" element={<MainView/>}/>
      <Route path="/generator" element={<GeneratorView/>}/>
      <Route path="/questions" element={<QuestionsView/>}/>

      <Route path="/questions/module" element={<AllQuestionsFromModule/>}/>
      <Route path="/questions/all" element={<AllQuestions/>}/>
      <Route path="/questions/add" element={<QuestionsView/>}/>

    </Routes>
  </div>
}
