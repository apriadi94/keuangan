import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
import convertRupiah from 'rupiah-format'

const HarianComponent = () => {
    const [data, setData] = useState([])
    const fetchData = [
        {
            tanggal: "2021-07-06",
            kategori: "Makanan",
            jumlah: 150000,
            jenis: 'pengeluaran'
        },
        {
            tanggal: "2021-07-06",
            kategori: "Pakaian",
            jumlah: 250000,
            jenis: 'pengeluaran'
        },
        {
            tanggal: "2021-07-07",
            kategori: "Makanan",
            jumlah: 25000,
            jenis: 'pengeluaran'
        }
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
                arrData.push({
                    tanggal: key,
                    data: value
                })
            });

            resolve(arrData)
        })
    }

    useEffect(() => {
        getData()
    }, [])


    return(
        <View>
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
                                        <View style={{ backgroundColor: 'gray', alignItems: 'center' }}>
                                            <Text style={{fontSize: 10, color: 'white'}}>{moment(item.tanggal).format('dddd')}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'right',  marginRight: 10  }}>Rp. 0</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', marginRight: 10 }}>
                                    <Text style={{ textAlign: 'right' }}>Rp. 0</Text>
                                </View>
                            </View>
                            <View style={{ height: 1, marginHorizontal: 5, backgroundColor: '#f2f2f2' }}></View>
                            {
                                item.data.map((value, indexValue) =>
                                    <View key={indexValue} style={{flexDirection: 'row', marginVertical: 10}}>
                                        <View style={{ flex: 1, marginLeft: 10}}>
                                            <Text>{value.kategori}</Text>
                                        </View>
                                        <View style={{flex : 1}}>
                                            <Text style={{ textAlign: 'right', marginRight: 10 }}>
                                                {
                                                    value.jenis === 'pemasukan' ? convertRupiah.convert(value.jumlah) : 'Rp. 0'
                                                }
                                            </Text>
                                        </View>
                                        <View style={{flex : 1, marginRight: 10 }}>
                                            <Text style={{ textAlign: 'right' }}>
                                                {
                                                    value.jenis === 'pengeluaran' ? convertRupiah.convert(value.jumlah) : 'Rp. 0'
                                                }
                                            </Text>
                                        </View>
                                    </View>
                                )
                            }
                        </View>
                    </View>
                )
            }
        </View>
    )
}

export default HarianComponent