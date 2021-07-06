import React from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from './component/HeaderComponent'
import TopNavigasi from './navigasi/TopNavigasi'

const HomeScreen = () => {
    return(
        <View style={{ flex: 1, backgroundColor: '#ccc' }}>
            <HeaderComponent/>
            <TopNavigasi/>
        </View>
    )
}

export default HomeScreen