import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

const KategoriScreen = () => {
    const [data, setData] = useState([])
    const kategoriList = [
        {
            kategoriId: 1,
            kategoriName: 'Makanan'
        },
        {
            kategoriId: 2,
            kategoriName: 'Pakaian'
        },
        {
            kategoriId: 3,
            kategoriName: 'Kecantikan'
        },
    ]
    
    const getData = () => {
        setData(kategoriList)
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {
                data.map((list, index) =>
                    <View key={index}>
                        <View style={{ marginHorizontal: 20, marginTop: 10}}>
                            <Text style={{ fontSize: 20}}>{list.kategoriName}</Text>
                        </View>
                        <View style={{ height: 1, backgroundColor: '#ccc', marginHorizontal: 20, marginBottom: 10, marginTop: 10}}></View>
                    </View>
                )
            }
        </View>
    )
}

export default KategoriScreen