import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListing, fetchTopListing } from './redux/asyncAction';
import { Store } from '../../redux/Store';
import TopListing from './molecule/TopListing';
import NewListing from './molecule/NewListing';
import BestListing from './molecule/bestListing';

const HomeScreen = () => {
  return (
   <View>
    <TopListing/>
    <NewListing/>
    <BestListing/>
   </View>
  )
}

export default HomeScreen