import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App';
import Welcome from '../Screens/Welcome';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Payment from '../Screens/Payment';
const Stack = createNativeStackNavigator();


export default function navigation() {
  const [page,setPage]=React.useState('Firebase')
  const Header=()=>{
    return(<>
    <View style={{height:50,width:'90%',alignSelf:'center',justifyContent:'space-around',marginVertical:20,flexDirection:'row'}}>
      <TouchableOpacity
      onPress={()=>{setPage('FireBase')}}
      style={[styles.btn,{opacity:page=='FireBase' ? 1 :( 0.3)}]}>
        <Text style={styles.txt}>FireBase</Text>

      </TouchableOpacity>
      <TouchableOpacity
          onPress={()=>{setPage('Payment')}}

          style={[styles.btn,{opacity:page=='Payment' ? 1 :( 0.3)}]}>
        <Text style={styles.txt}>Payment</Text>

      </TouchableOpacity>
      <TouchableOpacity 
            onPress={()=>{setPage('Video')}}

            style={[styles.btn,{opacity:page=='Video' ? 1 :( 0.3)}]}>
        <Text style={styles.txt}>Video</Text>

      </TouchableOpacity>
    </View>
    </>)
  }
    return (<>
      <Header/>

      {page=='FireBase' ? 
      <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="Welcome" component={Welcome} />

      </Stack.Navigator>
    </NavigationContainer> :<></>

      }
      {page=='Payment' ?
      <Payment/>:<></>

      }
        
        </>);
}const styles = StyleSheet.create({
btn:{
  height:40,
  width:'30%',
  width:100,
  backgroundColor:'#EDEADE',
  borderRadius: 15,
  justifyContent:'center',
  alignItems:'center',
  elevation:8


},
txt:
  {color:'black',
    fontSize:21,
    fontWeight:'500'
  }

})