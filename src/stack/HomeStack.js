import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AddFinanceProvider } from '../provider/AddFinanceProvider';
import HomeScreen from '../screen/beranda/HomeScreen';
import TambahFinanceScreen from '../screen/beranda/navigasi/tambah/TambahFinanceScreen'
import KategoriScreen from '../screen/beranda/navigasi/tambah/KategoriScreen';
import TambahKategoriScreen from '../screen/beranda/navigasi/tambah/TambahKategoriScreen';

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
        <AddFinanceProvider>
            <Stack.Navigator>
                <Stack.Screen name="Beranda" component={HomeScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="AddFinance" component={TambahFinanceScreen} options={{
                    ...optionsStyle,
                    title: 'Tambah Transaksi'
                }}/>
                <Stack.Screen name="Kategori" component={KategoriScreen} options={{
                    ...optionsStyle,
                    title: 'Kategori'
                }}/>
                <Stack.Screen name="TambahKategori" component={TambahKategoriScreen} options={{
                    ...optionsStyle,
                    title: 'Tambah Kategori'
                }}/>
            </Stack.Navigator>
        </AddFinanceProvider>
    )
}

export default HomeStack