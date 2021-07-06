import React from 'react'
import { View, Text } from 'react-native'

const HeaderComponent = () => {
    return(
        <View style={{ backgroundColor : '#1ab2ff', height: 100}}>
            <View style={{ marginTop: 10, marginHorizontal: 5, flexDirection: 'row'}}>
                <View style={{ justifyContent: 'flex-start' }}>
                    <Text style={{color: 'white', fontSize: 18}}>Jan 2021</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={{color: 'white', fontSize: 18}}>Jan 2021</Text>
                </View>
            </View>
        </View>
    )
}

export default HeaderComponent