import React, {useContext, useState} from "react";

import './ModuleTestSettings.css'
import {ModuleContext} from "../utils/context/module.context";
import {Link} from "react-router-dom";

interface TestParameter {
    module: string;
    questionCount: number;
}

export const ModuleTestSettings = () => {

    const {moduleList} = useContext(ModuleContext);
    const [testParameter, setTestParameter] = useState<TestParameter>({
        module: "Wybierz",
        questionCount: 10,
    })

    const handleTestParameter = (key: string, value: string | number) => {
        setTestParameter({
            ...testParameter,
            [key]: value,
        })
    }

    return <div className="ModuleTestSettings">
        <h1>Test Przedmiotowy</h1>
        <div className="options">
            <label>
                <p>Przedmiot:</p>
                <select name="module" onChange={e => handleTestParameter('module' ,e.target.value)}>
                    <option value="Wybierz">Wybierz</option>
                    {moduleList.map(module => <option key={module.id}
                                                      value={module.module}>{module.module}</option>)}
                </select>
            </label>
            <label>
                <p>Ilość pytań:</p>
                <input type="number" value={testParameter.questionCount} onChange={e => handleTestParameter('questionCount', e.target.value)}/>
            </label>
            <p>
                <Link className="button" to={`/generator/module/${testParameter.module}/${testParameter.questionCount}`}>Rozpocznij Test!</Link>
            </p>
        </div>
    </div>
}
