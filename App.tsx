import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/components/MainScreen';

const App = () => {
  return (
    <NavigationContainer>
        <MainScreen />
    </NavigationContainer>
  )
}

export default App