import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Children } from '../redux/StorageInterfce'

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
        return(
            <>
                <View>
                    <Text>{item.data.author}</Text>
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

