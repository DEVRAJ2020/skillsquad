import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = ({route}) => {
    const { name } = route.params;

  return (
    <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',paddingVertical:100}}>
      <Text style={{color:'black',fontSize:15,}} >Welcome  </Text>

      <Text style={{fontSize:25,fontWeight:'600',color:'black',marginTop:50}}>{name} </Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})