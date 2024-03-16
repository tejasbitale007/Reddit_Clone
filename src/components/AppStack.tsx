// import { View, Text } from 'react-native'
// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import LoginScreen from './modules/LoginScreen/LoginScreen';
// import BottomTabs from './BottomTabs';
// const AppStack = () => {
//   const Stack = createNativeStackNavigator();
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='LoginScreen' component={LoginScreen}></Stack.Screen> 
//       <Stack.Screen name='BottomScreen' component={BottomTabs}></Stack.Screen> 
//     </Stack.Navigator>
//   )
// }

// export default AppStack

import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './modules/LoginScreen/LoginScreen';
import BottomTabs from './BottomTabs';
import { useDispatch } from 'react-redux';
import { authenticationValidate } from './redux/asyncAction';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      {/* <Stack.Screen name='LoginScreen' component={LoginScreen} /> */}
      <Stack.Screen name='BottomScreen' component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default AppStack;