import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/beranda/HomeScreen';
import TambahFinanceScreen from '../screen/beranda/TambahFinanceScreen'

const Stack = createStackNavigator();

const optionsStyle = {
    headerStyle: {
        backgroundColor: '#1ab2ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
      }
}

const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Beranda" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="AddFinance" component={TambahFinanceScreen} options={{
                 ...optionsStyle,
                 title: 'Tambah Transaksi'
            }}/>
        </Stack.Navigator>
    )
}

export default HomeStack