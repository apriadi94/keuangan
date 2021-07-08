import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

const TambahFinanceScreen = () => {
    const [active, setActive] = useState('pengeluaran')
    return(
        <View>
            <View style={{ backgroundColor: '#fff' }}>
                <View style={{ flexDirection : 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <TouchableOpacity disabled={active === 'pengeluaran'} onPress={() =>setActive('pengeluaran')} style={{ flex: 1, height: 40, marginLeft: 20, marginRight: 5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: active === 'pengeluaran' ? '#ff4000' : '#e6e6e6' }}>
                        <Text style={{ fontSize: 18, color: active === 'pengeluaran' ? 'white' : 'black'}}>Pengeluaran</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  disabled={active === 'pemasukan'} onPress={() =>setActive('pemasukan') } style={{ flex: 1, height: 40, marginRight: 20, marginLeft: 5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: active === 'pemasukan' ? '#0099ff' : '#e6e6e6' }}>
                        <Text style={{ fontSize: 18,  color: active === 'pemasukan' ? 'white' : 'black' }}>Pemasukan</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginHorizontal: 10, marginBottom: 20 }}>
                    <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, width: 120 }}>Tanggal</Text>
                        <View style={{ marginRight: 10, borderColor: '#b3b3b3', borderWidth: 1, borderRadius: 10, flex: 1, height: 40 }}>
                            <TextInput style={{ fontSize: 16, marginLeft: 10 }}/>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, width: 120 }}>kategori</Text>
                        <View style={{ marginRight: 10, borderColor: '#b3b3b3', borderWidth: 1, borderRadius: 10, flex: 1, height: 40 }}>
                            <TextInput style={{ fontSize: 16, marginLeft: 10 }}/>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, width: 120 }}>Jumlah</Text>
                        <View style={{ marginRight: 10, borderColor: '#b3b3b3', borderWidth: 1, borderRadius: 10, flex: 1, height: 40 }}>
                            <TextInput style={{ fontSize: 16, marginLeft: 10 }}/>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, width: 120 }}>Keterangan</Text>
                        <View style={{ marginRight: 10, borderColor: '#b3b3b3', borderWidth: 1, borderRadius: 10, flex: 1, height: 40 }}>
                            <TextInput style={{ fontSize: 16, marginLeft: 10 }}/>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#cccccc' }}></View>
            <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 50, borderRadius:10, justifyContent: 'center', alignItems: 'center', width: 200, backgroundColor: active === 'pemasukan' ?  '#0099ff' : '#ff4000'}}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Simpan</Text>
                </View>
            </View>
        </View>
    )
}

export default TambahFinanceScreen