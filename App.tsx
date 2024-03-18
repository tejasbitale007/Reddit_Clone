import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/components/MainScreen';
import { Provider } from 'react-redux';
import { store } from './src/components/redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{flex:1}}>
          <MainScreen />
        </View>
      </NavigationContainer>
    </Provider>
  )
}

export default App