import React, {FormEvent, useContext, useEffect, useState} from "react";
import {ModuleContext} from "../../utils/context/module.context";
import {Link, useNavigate, useParams} from "react-router-dom";
import {apiUrl} from "../../../config/api";
import {fetchFunction} from "../../utils/fetchFunction";
import {Loader} from "../../Loader/Loader";
import {Question} from "types";

import './AdminPanelEditQuestionPreview.css'


export const AdminPanelEditQuestionPreview = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const {moduleList} = useContext(ModuleContext)

    const [updateQuestion, setUpdateQuestion] = useState<Question>({
        module: '',
        question: '',
        correctAnswer: '',
        badAnswer1: null,
        badAnswer2: null,
        badAnswer3: null,
    })
    const [load, setLoad] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        (async () => {
            setLoad(true)
            const res = await fetchFunction(`questions/getOneQuestion/${id}`)
            setUpdateQuestion(res)
            setLoad(false)
        })();
    }, [])

    const changeQuestion = (key: string, value: string) => {
        setUpdateQuestion({
            ...updateQuestion,
            [key]: value,
        })
    }

    const sendFrom = async (e: FormEvent) => {
        e.preventDefault()

        const res = await fetch(`${apiUrl}/questions`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateQuestion)
        })


        if(!res.ok) {
            setError(await res.json())
        } else {
            setError(null)
            navigate('/admin')
        }
    }

    return <div className="edit--question">
        {load ?
            <Loader/>
            :
            <div className="edit--question--panel">
                <form onSubmit={sendFrom}>
                    {error === null ? null : <div className="error">{error}</div>}
                    <div className="section">
                        <label>
                            <p>Wybierz Przedmiot:</p>
                            <select name="module" onChange={e => changeQuestion(e.target.name, e.target.value)}>
                                <option value="Wybierz">Wybierz</option>
                                {moduleList.map(module => <option key={module.id}
                                                                  value={module.module}>{module.module}</option>)}
                            </select>
                        </label>
                    </div>
                    <div className="section">
                        <label>
                            <p>Pytanie:</p>
                            <textarea name="question" value={updateQuestion.question}
                                      onChange={e => changeQuestion(e.target.name, e.target.value)}/>
                        </label>

                        <label>
                            <p>Poprawna odpowiedź:</p>
                            <textarea name="correctAnswer" value={updateQuestion.correctAnswer}
                                      onChange={e => changeQuestion(e.target.name, e.target.value)}/>
                        </label>

                    </div>
                    <div className="section">
                        <p>Błędne pytania do generowania Testu</p>
                        <small>(jeśli nie podasz chociaż jednego to pytanie nie będzie użyte w generowaniu
                            testu)</small>

                        <label>
                            <p>Zła odpowieź <small>(opcjonalnie)</small>:</p>
                            <textarea name="badAnswer1"
                                      value={updateQuestion.badAnswer1 === null ? '' : updateQuestion.badAnswer1}
                                      onChange={e => changeQuestion(e.target.name, e.target.value)}/>
                        </label>

                        <label>
                            <p>Zła odpowieź <small>(opcjonalnie)</small>:</p>
                            <textarea name="badAnswer2"
                                      value={updateQuestion.badAnswer2 === null ? '' : updateQuestion.badAnswer2}
                                      onChange={e => changeQuestion(e.target.name, e.target.value)}/>
                        </label>

                        <label>
                            <p>Zła odpowieź <small>(opcjonalnie)</small>:</p>
                            <textarea name="badAnswer3"
                                      value={updateQuestion.badAnswer3 === null ? '' : updateQuestion.badAnswer3}
                                      onChange={e => changeQuestion(e.target.name, e.target.value)}/>
                        </label>
                    </div>

                    <p>
                        <button className="add-button" type="submit">Edytuj</button>
                    </p>
                </form>
                <Link className="AdminPanelLink" to='/admin'>Powrót</Link>
            </div>
        }
    </div>
}
