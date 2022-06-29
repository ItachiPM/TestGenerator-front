import {createContext} from "react";

export const LoginContext = createContext({
    cookie: null,
    onLogin: () => {},
})
