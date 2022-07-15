import React, {useEffect, useState} from "react";
import {LogoutButton} from "../../utils/LogoutButton/LogoutButton";
import {SearchContent} from "../../utils/SearchContent/SearchContent";
import {fetchFunction} from "../../utils/fetchFunction";
import {AdminPanelUserPreview} from "../../AdminPanelPreview/AdminPanelUserPreview/AdminPanelUserPreview";
import {AdminPanelQuestionPreview} from "../../AdminPanelPreview/AdminPanelQuestionPreview/AdminPanelQuestionPreview";
import {Loader} from "../../Loader/Loader";
import {QuestionForAdmin, UserResponseForAdmin} from "types";

import './AdminView.css'

enum QuestionOrUser {
    user = 'users',
    question = 'questions'
}

export const AdminView = () => {

    const [searchedContent, setSearchedContent] = useState<string>('')
    const [questionOrUserData, setQuestionOrUserData] = useState<string>(QuestionOrUser.question)
    const [foundContent, setFoundContent] = useState<UserResponseForAdmin[] | QuestionForAdmin[] | null>(null)
    const [isDeleteElement, setIsDeleteElement] = useState<boolean>(false)

    const switchMenu = (module: string) => {
        setQuestionOrUserData(module)
        setSearchedContent('')
    }

    useEffect(() => {
        (async () => {
            setFoundContent(null)
            const res = await fetchFunction(`${questionOrUserData}/search/${searchedContent}`);
            setIsDeleteElement(false)
            setFoundContent(res)
        })();
    }, [searchedContent, questionOrUserData, isDeleteElement])

    return <div className="AdminView">
        <header>
            <h1>Admin</h1>
            <LogoutButton/>
        </header>
        <div className="container">
            <div className="menu">
                <button className="menu--option" onClick={() => switchMenu(QuestionOrUser.question)}>Questions</button>
                <button className="menu--option" onClick={() => switchMenu(QuestionOrUser.user)}>Users</button>
            </div>
            <div className="main--box">
                <div className="search">
                    <SearchContent setSearch={setSearchedContent}/>
                </div>
                <div className="admin-panel">
                    {foundContent === null ?
                        <Loader/>
                        :
                        questionOrUserData === 'questions' ?
                            <AdminPanelQuestionPreview setIsDeleteElement={setIsDeleteElement} questionData={foundContent as QuestionForAdmin[]}/>
                            :
                            <AdminPanelUserPreview setIsDeleteElement={setIsDeleteElement} userData={foundContent as UserResponseForAdmin[]}/>}
                </div>
            </div>
        </div>
    </div>
}
