import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const HeaderComponent = () => {
    return(
        <View style={{ backgroundColor : '#1ab2ff', height: 80}}>
            <View style={{ marginTop: 10, marginHorizontal: 5, flexDirection: 'row'}}>
                <View style={{ justifyContent: 'center', height: 60, marginLeft: 10 }}>
                    <Text style={{color: 'white'}}>Saldo</Text>
                    <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>Rp. 3.500.000</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <View style={{ flexDirection: 'row'}}>
                        <Icon name="chevron-left" size={16} color="#fff" style={{ marginTop: 5, marginRight: 10 }} />
                        <Text style={{color: 'white', fontSize: 18}}>Jan 2021</Text>
                        <Icon name="chevron-right" size={16} color="#fff" style={{ marginTop: 5, marginLeft: 10, marginRight: 10 }} />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end'}}>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialIcons name="file-download" size={23} color="#fff" style={{ marginTop: 5, marginRight: 20 }} />
                            <Icon name="filter" size={20} color="#fff" style={{ marginTop: 5, marginRight: 20 }} />
                            <Icon name="search" size={20} color="#fff" style={{ marginTop: 5, marginRight: 20 }} />
                            <MaterialIcons name="more-vert"  size={23} color="#fff" style={{ marginTop: 5, marginRight: 5 }} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HeaderComponent