import React, {FormEvent, useContext, useEffect, useState} from "react";
import {Title} from "../utils/Title/Title";
import {BackButton} from "../utils/BackButton/BackButton";
import {ModuleContext} from "../utils/context/module.context";
import {fetchFunction} from "../utils/fetchFunction";
import {Question} from "types";

import './AddQuestion.css'

interface ResponseValue {
    success: string | null;
    error: string | null
}

export const AddQuestion = () => {

    const {moduleList, setModuleList} = useContext(ModuleContext)
    const [response, setResponse] = useState<ResponseValue>({
        error: null,
        success: null,
    })
    const [addNewModule, setAddNewModule] = useState<boolean>(false)
    const [newQuestion, setNewQuestion] = useState<Question>({
        module: '',
        question: '',
        correctAnswer: '',
        badAnswer1: null,
        badAnswer2: null,
        badAnswer3: null,
    })

    useEffect(() => {
        (async () => {
            const data = await fetchFunction(`modules`);
            setModuleList(data)
        })();
    }, [addNewModule])

    const changeNewQuestion = (key: string, value: string) => {
        setNewQuestion({
            ...newQuestion,
            [key]: value,
        })
    }

    const clearForm = () => {
        (document.getElementById('myForm') as HTMLFormElement).reset();
    }

    const sendFrom = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const res = await fetch('http://localhost:3001/questions/add', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newQuestion)
            })
            if (!res.ok) {
                const error = await res.json()
                setResponse({
                    success: null,
                    error: error,
                })
            } else {
                const data = await res.json();
                setResponse({
                    success: `Dodano nowe pytanie do przedmiotu ${data.module}`,
                    error: null,
                })
                setAddNewModule(data.isNewModule)
                clearForm()
            }
        } catch (e) {
            console.log(e)
        }
    }

    return <div className="AddQuestion">
        <Title/>
        <h2>Dodaj Pytanie</h2>
        {response.success === null ? null : <div className="correct-add-question">{response.success}</div>}
        <form id="myForm" onSubmit={sendFrom}>
            {response.error === null ? null : <div className="error">{response.error}</div>}
            <div className="section">
                {addNewModule ?
                    <label>
                        <p>Dodaj nowy przemdiot:</p>
                        <input type="text" name="module" id="newModule"
                               onChange={e => changeNewQuestion(e.target.name, e.target.value)}/>
                        <p>
                            <button className="module--button" type="button"
                                    onClick={() => setAddNewModule(!addNewModule)}>Wybierz z listy
                            </button>
                        </p>
                    </label>
                    :
                    <label>
                        <p>Wybierz Przedmiot:</p>
                        <select name="module" onChange={e => changeNewQuestion(e.target.name, e.target.value)}>
                            <option value="Wybierz">Wybierz</option>
                            {moduleList.map(module => <option key={module.id}
                                                              value={module.module}>{module.module}</option>)}
                        </select>
                        <p>
                            <button className="module--button" type="button"
                                    onClick={() => setAddNewModule(!addNewModule)}>Dodaj nowy przedmiot
                            </button>
                        </p>
                    </label>}
            </div>
            <div className="section">
                <label>
                    <p>Pytanie:</p>
                    <input type="text" name="question"
                           onChange={e => changeNewQuestion(e.target.name, e.target.value)}/>
                </label>

                <label>
                    <p>Poprawna odpowiedź:</p>
                    <input type="text" name="correctAnswer"
                           onChange={e => changeNewQuestion(e.target.name, e.target.value)}/>
                </label>

            </div>
            <div className="section">
                <p>Błędne pytania do generowania Testu</p>
                <small>Opcjonalnie</small>

                <label>
                    <p>Zła odpowieź <small>(opcjonalnie)</small>:</p>
                    <input type="text" name="badAnswer1"
                           onChange={e => changeNewQuestion(e.target.name, e.target.value)}/>
                </label>

                <label>
                    <p>Zła odpowieź <small>(opcjonalnie)</small>:</p>
                    <input type="text" name="badAnswer2"
                           onChange={e => changeNewQuestion(e.target.name, e.target.value)}/>
                </label>

                <label>
                    <p>Zła odpowieź <small>(opcjonalnie)</small>:</p>
                    <input type="text" name="badAnswer3"
                           onChange={e => changeNewQuestion(e.target.name, e.target.value)}/>
                </label>
            </div>

            <p>
                <button className="add-button" type="submit">Dodaj</button>
            </p>
        </form>
        <div className="back--button"><BackButton/></div>
    </div>
}
