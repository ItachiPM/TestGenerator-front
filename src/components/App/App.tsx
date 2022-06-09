import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {GeneratorView} from "../Views/GeneratorView";
import {QuestionsView} from "../Views/QuestionsView";

import './App.css';



export const App = () => {
  return <div className='App'>
      <h1>Genertor magisterki</h1>

    <Link to="/generator">Generuj test</Link>
    <Link to="/questions">Pytania</Link>
    <Routes>
      <Route path="/generator" element={<GeneratorView/>}/>
      <Route path="/questions" element={<QuestionsView/>}/>

      <Route path="/questions/:module" element={<QuestionsView/>}/>
      <Route path="/questions/all" element={<AllQuestions/>}/>
      <Route path="/questions/add" element={<QuestionsView/>}/>

    </Routes>
  </div>
}
