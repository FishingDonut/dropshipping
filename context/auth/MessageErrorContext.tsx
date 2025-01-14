'use client';

import { useState, createContext } from "react";

export type MessageErrorContextProps = {
    messageError: string,
    setMessageError: (value: string) => void
}

type MessageErrorProviderProps = {
    children: React.ReactNode
}

const MessageErrorContext = createContext({} as MessageErrorContextProps);

const MessageErrorProvider: React.FC<MessageErrorProviderProps> = ({ children }) => {
    const [messageError, setMessageError] = useState<string>('');

    return (
        <MessageErrorContext.Provider value={{
            messageError,
            setMessageError
        }}>
            {children}
        </MessageErrorContext.Provider>
    );
}

export { MessageErrorContext, MessageErrorProvider };