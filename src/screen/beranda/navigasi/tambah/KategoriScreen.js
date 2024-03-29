import React, { useState, useEffect, useContext, useCallback } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AddFinanceContext } from '../../../../provider/AddFinanceProvider'
import Icon from 'react-native-vector-icons/FontAwesome';
import TambahKategori from './TambahKategori';
import EditKategori from './EditKategori'
import { getKategori } from '../../../../database/kategori/kategoriService'

const KategoriScreen = ({ navigation }) => {
    const { setKategori, kategori, active } = useContext(AddFinanceContext)
    const [data, setData] = useState([])
    const [modalTambahKategori, setModalTambahKategori] = useState(false)
    const [modalEditKategori, setModalEditKategori] = useState(false)
    const [editForm, setEditForm] = useState({
        id: '',
        kategoriName : ''
    })


    const toggleModal = useCallback(() => {
        setModalTambahKategori(!modalTambahKategori)
    }, [modalTambahKategori])

    const toggleModalEdit = useCallback(() => {
        if(!modalEditKategori === false){
            setEditForm({
                id: '',
                kategoriName : ''
            })
        }
        setModalEditKategori(!modalEditKategori)
    }, [modalEditKategori])

    
    const getData = () => {
        getKategori(active).then(res => {
            setData(res)
        })
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ width: 40, alignItems: 'flex-end', justifyContent: 'center', height: 40, marginRight: 5 }}>
                        <Icon name="search" color="white" size={18} style={{ marginRight: 10 }}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal} style={{ width: 40, alignItems: 'center', justifyContent: 'center', height: 40}}>
                        <Icon name="plus" color="white" size={18}/>
                    </TouchableOpacity>
                </View>
            )
        })
        getData()
    }, [toggleModal, toggleModalEdit, editForm])

    return(
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TambahKategori getData={getData} modalTambahKategori={modalTambahKategori} toggleModal={toggleModal}/>
            {
                editForm.kategoriName !== '' ? <EditKategori setEditForm={setEditForm} dataForm={editForm} getData={getData} modalEditKategori={modalEditKategori} toggleModal={toggleModalEdit}/> : null
            }
            
            {
                data.map((list, index) =>
                    <View key={index}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 10}}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                                setKategori({ id: list.id, kategoriName: list.kategoriName })
                                navigation.goBack()
                            }}>
                                <View>
                                    <Text style={{ fontSize: 20, color: kategori.id === list.id ? 'green': 'black' }}>{list.kategoriName}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                    setEditForm({
                                        id: list.id,
                                        kategoriName: list.kategoriName
                                    })
                                    toggleModalEdit()
                            }} style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Icon name="edit" size={20} color={'black'}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 1, backgroundColor: '#ccc', marginHorizontal: 20, marginBottom: 10, marginTop: 10}}></View>
                    </View>
                )
            }
        </View>
    )
}

export default KategoriScreen