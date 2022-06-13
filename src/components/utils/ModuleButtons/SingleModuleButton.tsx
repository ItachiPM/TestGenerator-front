import React from "react";

import './SingleModuleButton.css'

interface Props {
    module: string;
    onHandle: (module: string) => void;
}

export const SingleModuleButton = (props: Props) => {
    const {module, onHandle} = props;

    return <button
        type="button"
        className="ModuleButton"
        onClick={() => onHandle(module)}
    >{module}</button>
}
