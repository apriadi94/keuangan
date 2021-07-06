import 'react-native-gesture-handler'
import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStack from './HomeStack'

const Tab = createBottomTabNavigator();

const AppStack = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStack} options={{ 
                    tabBarLabel: () => (
                        <Text style={{fontSize : 12}}>Home</Text>
                    ),
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" size={20} color={color} style={{marginTop : 5}} />
                    ),
                 }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppStack