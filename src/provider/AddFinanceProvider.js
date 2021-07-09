import React, { useState, createContext } from 'react'

export const AddFinanceContext = createContext()
export const AddFinanceProvider = ({ children }) => {

    const addFinanceState = {}
    return(
        <AddFinanceContext.Provider value={addFinanceState}>
            {
                children
            }
        </AddFinanceContext.Provider>
    )
}
