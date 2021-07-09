import React, { useState, createContext } from 'react'

export const AddFinanceContext = createContext()
export const AddFinanceProvider = ({ children }) => {
    const [active, setActive] = useState('pengeluaran')
    const [kategori, setKategori] = useState({
        kategoriId: 1,
        kategoriName: 'Makanan',
        kategoriJenis: 'pengeluaran'
    })

    const addFinanceState = { kategori, setKategori, active, setActive }
    return(
        <AddFinanceContext.Provider value={addFinanceState}>
            {
                children
            }
        </AddFinanceContext.Provider>
    )
}
