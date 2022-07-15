import React, {FormEvent, useState} from "react";

import './SearchContent.css'

export interface Props {
    setSearch: (s: string) => void;
}

export const SearchContent = (props: Props) => {

    const [content, setContent] = useState<string>('')

    const sendForm = (e: FormEvent) => {
        e.preventDefault()
        props.setSearch(content)
    }

    return <form onSubmit={sendForm} className="SearchContent">
        <input type="text" placeholder="..." value={content} onChange={ e => setContent(e.target.value)}/>
        <button type="submit">Szukaj</button>
    </form>
}
