import React, { createContext } from 'react'

export const AppContext = createContext()
export const AppProvider = ({ children }) => {
    const appStack = {}
    return(
        <AppContext.Provider value={appStack}>
            {
                children
            }
        </AppContext.Provider>
    )
}
