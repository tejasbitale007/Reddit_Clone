import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './modules/HomeScreen/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuComponent from './modules/MenuComponent/MenuComponent';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator  screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen name='Home' component={HomeScreen}/>
        
    </Tab.Navigator>
  )
}

export default BottomTabs