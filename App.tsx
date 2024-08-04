import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.maincont}>
      <View style={styles.container}>
      <LoginScreen />

      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    //  backgroundColor:'orange'
  
  },
  maincont:{
    flex:1,
    justifyContent:'center',
    // padding:10,
    
    // backgroundColor:'green'
  }
});

export default App;
