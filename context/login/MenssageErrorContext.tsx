'use client';

import { useState, createContext } from "react";

export type MenssageErrorContextProps = {
    menssageError: string,
    // setMenssageError: setMenssageError
    setMenssageError: (value: string) => void
}

type MenssageErrorProviderProps = {
    children: React.ReactNode
}

const MenssageErrorContext = createContext({} as MenssageErrorContextProps);

const MenssageErrorProvider: React.FC<MenssageErrorProviderProps> = ({children}) => {
    const [menssageError, setMenssageError] = useState<string>('');

    return (
        <MenssageErrorContext.Provider value={{
            menssageError, 
            setMenssageError
        }}>
            {children}
        </MenssageErrorContext.Provider>
    );
}

export { MenssageErrorContext, MenssageErrorProvider};