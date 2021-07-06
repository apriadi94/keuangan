import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HarianComponent from './HarianComponent';
import MingguanComponent from './MingguanComponent';

const Tab = createMaterialTopTabNavigator();

const TopNavigasi = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Harian" component={HarianComponent} />
      <Tab.Screen name="Mingguan" component={MingguanComponent} />
    </Tab.Navigator>
  );
}

export default TopNavigasi