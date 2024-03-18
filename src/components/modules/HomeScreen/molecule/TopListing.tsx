import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TopListingCard from '../atom/TopListingCard';
import { Store } from '../../../redux/Store';
import { fetchTopListing } from '../redux/asyncAction';

const TopListing = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTopListing())
    }, [])

    const TopListngComponent = useSelector((state: Store) => state.HomeScreen?.topData?.data?.children);
    // console.log('the component getting 1302', TopListngComponent.slice(0,1))
    return (
        <View>
            <TopListingCard data={TopListngComponent}/>
        </View>
    )
}

export default TopListing

const styles = StyleSheet.create({})