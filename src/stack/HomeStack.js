import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Beranda" component={HomeScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default HomeStack