import { createContext } from "react"

// 1. Create Context

export const GlobalContext = createContext()
export function ApplicationContext({children})
{   
    const userName = "Abhay";
    const userAge = "23";

    return (<>

        {/* 2. Provide a context with values */}
        <GlobalContext.Provider value={{userName,userAge}}>
            {children}
        </GlobalContext.Provider>
    </>
    );
}