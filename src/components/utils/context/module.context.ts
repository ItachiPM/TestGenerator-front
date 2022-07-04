import {createContext} from "react";
import { Module } from "types";

export const ModuleContext = createContext({
    moduleList: [] as Module[],
    setModuleList: (a: Module[]) => {},
})
