import React, {useEffect, useState} from "react";
import {SingleModuleButton} from "./SingleModuleButton";
import {Module} from "types";

interface Props {
    handleModuleButton: (module: string) => void;
}

export const ModuleButtons = (props: Props) => {

    const {handleModuleButton} = props

    const [modules, setModules] = useState<Module[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/modules`);
            const date = await res.json();
            handleModuleButton(date[0].module)
            setModules(date)

        })();
    }, [])


    return <>
        {modules.map(module => <SingleModuleButton key={module.id} onHandle={handleModuleButton} module={module.module}/>)}
    </>
}
