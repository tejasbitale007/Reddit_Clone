import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './modules/HomeScreen/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator  screenOptions={{
        headerShown:false
    }}>
      <Drawer.Navigator>
        <Drawer.Screen name='Drawer' component={HomeScreen}/>
      </Drawer.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}/>
        
    </Tab.Navigator>
  )
}

export default BottomTabs