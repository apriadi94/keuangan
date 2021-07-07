import React from 'react'
import { View } from 'react-native'
import HeaderComponent from './component/HeaderComponent'
import TopNavigasi from './navigasi/TopNavigasi'
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
    return(
        <View style={{ flex: 1, backgroundColor: '#ccc' }}>
            <HeaderComponent/>
            <TopNavigasi/>
                <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#1ab2ff', height: 60, width: 60, borderRadius: 30, marginBottom: 10, marginRight: 10 }}>
                        <Icon name="plus" size={25} color="#fff" />
                    </View>
                </View>
        </View>
    )
}

export default HomeScreen