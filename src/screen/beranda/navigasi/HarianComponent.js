import React from 'react'
import { View, Text } from 'react-native'

const HarianComponent = () => {
    return(
        <View>
            <View style={{ backgroundColor: '#fff', marginTop: 5 }}>
                <View style={{marginTop: 10, marginHorizontal: 5}}>
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                        <View style={{ marginLeft : 10}}>
                            <Text style={{ fontWeight: 'bold', fontSize: 25}}>06</Text>
                        </View>
                        <View style={{ marginLeft: 10, marginTop: 3 }}>
                            <Text style={{fontSize: 10}}>
                                07 2021
                            </Text>
                            <View style={{ backgroundColor: 'gray', alignItems: 'center' }}>
                                <Text style={{fontSize: 10, color: 'white'}}>Selasa</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'right' }}>Rp. 0</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', marginRight: 10 }}>
                            <Text style={{ textAlign: 'right' }}>Rp. 0</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HarianComponent