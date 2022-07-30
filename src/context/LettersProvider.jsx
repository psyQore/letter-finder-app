import { useState, createContext } from "react";

const LettersContetx = createContext();

const LettersProvider = ({ children }) => {


    return (
        <LettersContetx.Provider value={{}}>
            { children }
        </LettersContetx.Provider>
    )
}

export {
    LettersProvider
}

export default LettersContetx;