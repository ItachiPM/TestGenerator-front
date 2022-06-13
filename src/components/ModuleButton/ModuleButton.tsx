import React from "react";

import './ModuleButton.css'

interface Props {
    module: string;
    onHandle: (e: string) => void;
}

export const ModuleButton = (props: Props) => {
    const {module, onHandle} = props;

    return <button
        type="button"
        className="ModuleButton"
        onClick={() => onHandle(module)}
    >{module}</button>
}
