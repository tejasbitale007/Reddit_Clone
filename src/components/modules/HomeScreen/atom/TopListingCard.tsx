import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Children } from '../redux/StorageInterfce'
import Card from '../../../atoms/Card'

interface TopListingInterface{
    data : Children[]
}

const TopListingCard = (props:TopListingInterface) => {
  return (
    <View>
      {Array.isArray(props.data) && props.data.length > 0 && 
      <FlatList
      data={props.data}
      renderItem={({item,index})=>{
         const imageSource = {
            uri: item?.data?.thumbnail
          }
        
        return(
            <>
                <View>
                    {/* <Card imageSource={imageSource} price={''} address={''} bed={0} bath={0} car={0}/> */}
                    <Text>{item.data.thumbnail}</Text>
                </View>
            </>
        )
      }}
      />
      }
    </View>
  )
}

export default TopListingCard

