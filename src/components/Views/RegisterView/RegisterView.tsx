import React, {useState} from "react";
import {Title} from "../../utils/Title/Title";
import { CorrectRegister } from "./CorrectRegister";
import {RegisterForm} from "./RegisterForm";

export const RegisterView = () => {
    const [correctRegister, setCorrectRegister] = useState<boolean>(false)

    const onHandleRegister = () => {
        setCorrectRegister(true)
    }

    return <div className="RegisterView">
        <Title/>
        {correctRegister ? <CorrectRegister/> : <RegisterForm onHandleRegister={onHandleRegister}/>}
    </div>
}
