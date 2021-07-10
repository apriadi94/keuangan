import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AddFinanceContext } from '../../../../provider/AddFinanceProvider'
import Icon from 'react-native-vector-icons/FontAwesome';
import TambahKategori from './TambahKategori';

const KategoriScreen = ({ navigation }) => {
    const { setKategori, kategori, active } = useContext(AddFinanceContext)
    const [data, setData] = useState([])
    const [modalTambahKategori, setModalTambahKategori] = useState(false)

    const kategoriList = [
        {
            kategoriId: 1,
            kategoriName: 'Makanan',
            kategoriJenis: 'pengeluaran'
        },
        {
            kategoriId: 2,
            kategoriName: 'Pakaian',
            kategoriJenis: 'pengeluaran'
        },
        {
            kategoriId: 3,
            kategoriName: 'Kecantikan',
            kategoriJenis: 'pengeluaran'
        },
        {
            kategoriId: 4,
            kategoriName: 'Gaji',
            kategoriJenis: 'pemasukan'
        },
        {
            kategoriId: 5,
            kategoriName: 'Proyek',
            kategoriJenis: 'pemasukan'
        },
    ]
    
    const getData = () => {
        setData(kategoriList.filter(item => item.kategoriJenis === active))
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ width: 40, alignItems: 'flex-end', justifyContent: 'center', height: 40, marginRight: 5 }}>
                        <Icon name="search" color="white" size={18} style={{ marginRight: 10 }}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalTambahKategori(true)} style={{ width: 40, alignItems: 'center', justifyContent: 'center', height: 40}}>
                        <Icon name="plus" color="white" size={18}/>
                    </TouchableOpacity>
                </View>
            )
        })
        getData()
    }, [])

    return(
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {
                data.map((list, index) =>
                    <View key={index}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                                setKategori({ kategoriId: list.kategoriId, kategoriName: list.kategoriName })
                                navigation.goBack()
                            }}>
                                <View>
                                    <Text style={{ fontSize: 20, color: kategori.kategoriId === list.kategoriId ? 'green': 'black' }}>{list.kategoriName}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Icon name="edit" size={20} color={'black'}/>
                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: '#ccc', marginHorizontal: 20, marginBottom: 10, marginTop: 10}}></View>
                    </View>
                )
            }
            <TambahKategori modalTambahKategori={modalTambahKategori} setModalTambahKategori={setModalTambahKategori}/>
        </View>
    )
}

export default KategoriScreen