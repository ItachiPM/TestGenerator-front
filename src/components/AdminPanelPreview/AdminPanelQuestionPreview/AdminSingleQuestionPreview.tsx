import React from "react";
import {Link} from "react-router-dom";
import {apiUrl} from "../../../config/api";
import {QuestionForAdmin} from "types";


interface Props {
    question: QuestionForAdmin
    setIsDeleteElement: (s: boolean) => void
}

export const AdminSingleQuestionPreview = (props: Props) => {
    const {question, setIsDeleteElement} = props

    const deleteFunction = async () => {
        if (window.confirm('czy napewno chcesz usunąć to pytanie ?')) {
            const res = await fetch(`${apiUrl}/questions/${question.id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
            })
            if (!res.ok) {
                alert(`${await res.json()}`)
            } else {
                const data = await res.json()
                alert(data.ok)
                setIsDeleteElement(true)
            }
        }
    }

    return <tr>
        <td>{question.id}</td>
        <td>{question.question}</td>
        <td>{question.correctAnswer}</td>
        <td>
            <Link className="admin--link" to={`/admin/editquestion/${question.id}`}>🖊</Link>
        </td>
        <td>
            <button onClick={() => deleteFunction()}>🗑</button>
        </td>
    </tr>
}
