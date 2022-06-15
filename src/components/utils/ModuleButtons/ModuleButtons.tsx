import React, {useContext, useEffect} from "react";
import {SingleModuleButton} from "./SingleModuleButton";
import {ModuleContext} from "../context/module.context";
import {fetchFunction} from "../fetchFunction";

interface Props {
    handleModuleButton: (module: string) => void;
}

export const ModuleButtons = (props: Props) => {

    const {moduleList, setModuleList} = useContext(ModuleContext)
    const {handleModuleButton} = props


    useEffect(() => {
        (async () => {
            const data = await fetchFunction(`modules`);
            setModuleList(data)
        })()
    }, []);

    return <>
        {moduleList.map(m => <SingleModuleButton key={m.id} onHandle={handleModuleButton} module={m.module}/>)}
    </>
}
