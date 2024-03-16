import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchListing } from './redux/asyncAction';

const HomeScreen = () => {
  const disaptch = useDispatch();
  useEffect(()=>{
    disaptch(fetchListing())
  },[])
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen