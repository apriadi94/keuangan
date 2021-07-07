import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import moment from 'moment'
import convertRupiah from 'rupiah-format'

const HarianComponent = () => {
    const [data, setData] = useState([])
    const fetchData = [
        {
            tanggal: "2021-07-02",
            kategori: "Makanan",
            jumlah: 150000,
            jenis: 'pengeluaran',
            keterangan: 'Mie Indomie 3, Mie Sedap 5, Mie Sarimi 7'
        },
        {
            tanggal: "2021-07-02",
            kategori: "Pakaian",
            jumlah: 375000,
            jenis: 'pengeluaran',
            keterangan: 'Sepatu dan Dasi'
        },

        {
            tanggal: "2021-07-04",
            kategori: "Proyek",
            jumlah: 2000000,
            jenis: 'pemasukan',
            keterangan: 'Proyek PTA'
        },

    ]

    const getData = async() => {
        const newData = await changeData(fetchData)
        setData(newData)
    }

    const changeData = (arrayData) => {
        return new Promise(resolve => {
            const arrData = []
            let newData = {}
            let jumlah = {}

            arrayData.forEach(item => {
                jumlah[item.tanggal] ? jumlah[item.tanggal]++ : jumlah[item.tanggal] = 1
                newData[item.tanggal] = arrayData.filter(itemFilter => itemFilter.tanggal === item.tanggal)
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

            resolve(arrData)
        })
    }

    useEffect(() => {
        getData()
    }, [])
    


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
                                    <View key={indexValue} style={{flexDirection: 'row', marginVertical: 10}}>
                                        <View style={{ flex: 1, marginLeft: 10}}>
                                            <Text>{value.kategori}</Text>
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
                                    </View>
                                )
                            }
                        </View>
                        <View style={{ height: 1, marginTop: 10, backgroundColor: 'black' }}></View>
                    </View>
                )
            }
            { data.length > 3 ? <View style={{ height : 70, backgroundColor: 'white'}}></View> : null }
            </ScrollView>
        </View>
    )
}

export default HarianComponent