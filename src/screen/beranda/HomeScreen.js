import React from 'react'
import { View, Text } from 'react-native'
import HeaderComponent from './component/HeaderComponent'

const HomeScreen = () => {
    return(
        <View style={{ flex: 1, backgroundColor: '#ccc' }}>
            <HeaderComponent/>
        </View>
    )
}

export default HomeScreen