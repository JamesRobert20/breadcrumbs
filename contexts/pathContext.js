import { createContext } from "react";

const PathContext = createContext();

export const PathContextProvider = ({ children , values }) => {
    return (
        <PathContext.Provider value={values}>
            {children}
        </PathContext.Provider>
    )
} 

export default PathContext