import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker';


const TambahFinanceScreen = () => {
    const [active, setActive] = useState('pengeluaran')
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };

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
                        <TouchableWithoutFeedback onPress={showDatepicker}>
                            <View style={{ flexDirection: 'row', marginRight: 10, borderColor: '#b3b3b3', borderWidth: 1, borderRadius: 10, flex: 1, height: 40 }}>
                                <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 16 }}>{moment(date).format('dddd, DD-MM-YYYY')}</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                                    <Icon name="calendar" size={16} color={'black'}/>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
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
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChangeDate}
                />
            )}
        </View>
    )
}

export default TambahFinanceScreen