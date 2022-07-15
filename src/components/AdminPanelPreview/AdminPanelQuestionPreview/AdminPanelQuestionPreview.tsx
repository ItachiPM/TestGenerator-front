import React from "react";
import {AdminSingleQuestionPreview} from "./AdminSingleQuestionPreview";
import {QuestionForAdmin } from "types";

interface Props {
    questionData: QuestionForAdmin[]
    setIsDeleteElement: (s: boolean) => void
}

export const AdminPanelQuestionPreview = (props: Props) => {
    const {questionData, setIsDeleteElement} = props

    return <div className="question--preview">
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Question</th>
                <th>Correct Answer</th>
            </tr>
            </thead>
            <tbody>
            {questionData.map(question => <AdminSingleQuestionPreview setIsDeleteElement={setIsDeleteElement} key={question.id} question={question}/>)}
            </tbody>
        </table>
    </div>
}
