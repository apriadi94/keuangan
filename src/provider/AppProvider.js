import React, { useState, createContext, useEffect } from 'react'
import { getFinance } from '../database/finance/financeService'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [dataFinance, setDataFinance] = useState([])

    const getDataFinanceFromProvider = async() => {
        const data = await getFinance()
        setDataFinance(data)
    }
    

    useEffect(() => {
        getDataFinanceFromProvider()
    }, [])
    const appStack = {dataFinance, getDataFinanceFromProvider}
    return(
        <AppContext.Provider value={appStack}>
            {
                children
            }
        </AppContext.Provider>
    )
}
