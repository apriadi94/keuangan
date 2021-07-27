import React, { useState, useEffect, useContext } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { AppContext } from '../../../provider/AppProvider'
import convertRupiah from 'rupiah-format'
import { deleteFinance } from '../../../database/finance/financeService' 

const HarianComponent = ({ navigation }) => {
    const { dataFinance } = useContext(AppContext)
    const [data, setData] = useState([])

    const changeData = (arrayData) => {
            const arrData = []
            let newData = {}
            let jumlah = {}

            arrayData.forEach(item => {
                jumlah[moment(item.tanggal).format('YYYY-MM-DD')] ? jumlah[moment(item.tanggal).format('YYYY-MM-DD')]++ : jumlah[moment(item.tanggal).format('YYYY-MM-DD')] = 1
                newData[moment(item.tanggal).format('YYYY-MM-DD')] = arrayData.filter(itemFilter => moment(itemFilter.tanggal).format('YYYY-MM-DD') === moment(item.tanggal).format('YYYY-MM-DD'))
            })

            const objectArray = Object.entries(newData);

            objectArray.forEach(([key, value]) => {
                let pemasukan = 0
                let pengeluaran = 0

                value.forEach(item => {
                    if(item.jenis === 'pemasukan'){
                        pemasukan += item.jumlah
                    }else{
                        pengeluaran += item.jumlah
                    }
                })

                arrData.push({
                    tanggal: key,
                    data: value,
                    pemasukan,
                    pengeluaran
                })
            });
            setData(arrData)
    }

    const deleteTransaction = async (id) => {
        await deleteFinance(id)
        const newData =  dataFinance.filter(item => item.id !== id)
        changeData(newData)
    }

    useEffect(() => {
        changeData(dataFinance)
    }, [dataFinance])
    


    return(
        <View style={{flex: 1}}>
            <ScrollView>
            {
                data.map((item, index) => 
                    <View key={index} style={{ backgroundColor: '#fff', marginTop: 5 }}>
                        <View style={{marginTop: 10, marginHorizontal: 5}}>
                            <View style={{flexDirection: 'row', marginBottom: 5}}>
                                <View style={{ flexDirection: 'row', flex: 1}}>
                                    <View style={{ marginLeft : 10}}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 25}}>{moment(item.tanggal).format('DD')}</Text>
                                    </View>
                                    <View style={{ marginLeft: 10, marginTop: 3 }}>
                                        <Text style={{fontSize: 10}}>
                                            {moment(item.tanggal).format('MM YYYY')}
                                        </Text>
                                        <View style={{ backgroundColor: 'gray', alignItems: 'center', borderRadius: 5 }}>
                                            <Text style={{fontSize: 10, color: 'white', marginHorizontal: 5}}>{moment(item.tanggal).format('dddd')}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1.5, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 12 }}>Pemasukan</Text>
                                    <Text style={{ textAlign: 'center',  marginRight: 10, color: '#0099ff'  }}>{convertRupiah.convert(item.pemasukan).replace(',00','')}</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', marginRight: 10 }}>
                                    <Text style={{ textAlign: 'center', fontSize: 12 }}>Pengeluaran</Text>
                                    <Text style={{ textAlign: 'center', color: '#ff4000' }}>{convertRupiah.convert(item.pengeluaran).replace(',00','')}</Text>
                                </View>
                            </View>
                            <View style={{ height: 1, marginHorizontal: 5, backgroundColor: '#f2f2f2' }}></View>
                            {
                                item.data.map((value, indexValue) =>
                                    <TouchableOpacity onPress={() => deleteTransaction(value.id)} key={indexValue} style={{flexDirection: 'row', marginVertical: 10}}>
                                        <View style={{ flex: 1, marginLeft: 10}}>
                                            <Text>{value.kategoriName}</Text>
                                        </View>
                                        <View style={{flex : 1.5, marginRight: 10}}>
                                            <Text style={{ marginRight: 10 }}>
                                                {value.keterangan}
                                            </Text>
                                        </View>
                                        <View style={{flex : 1, marginRight: 10 }}>
                                            <Text style={{ textAlign: 'right', fontWeight: 'bold', color: value.jenis === 'pemasukan' ? '#0099ff' : '#ff4000' }}>
                                                {convertRupiah.convert(value.jumlah).replace(',00','')}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        <View style={{ height: 1, marginTop: 10, backgroundColor: '#999999' }}></View>
                    </View>
                )
            }
            { data.length > 3 ? <View style={{ height : 70, backgroundColor: 'white'}}></View> : null }
            </ScrollView>
        </View>
    )
}

export default HarianComponent