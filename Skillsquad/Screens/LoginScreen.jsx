import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView, StatusBar, Alert } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Welcome from './Welcome';

const LoginScreen = () => {
  const [email,setEmail]=useState(null);
  const [pass,setPass]=useState(null);
  const [type,setType]=useState('SignUp')
  const [ERROR,setError]=useState('')


  const Navigation=useNavigation();

  const SignUp=async()=>{
    if(email == null || pass == null){
      Alert.alert('Please enter all fields')
    }
    else{
      console.log("Signup Called");

      await auth()
      .createUserWithEmailAndPassword(email, pass)
      .then((user) => {
        console.log('User account created & signed in!',user);
        Navigation.navigate('Welcome',{name:user.user.email})
    
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert("User already exists, Please Login")
          setType('Login')
    
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        else{
          Alert.alert(JSON.stringify(error.code))

        }
    
        console.error(error);
      });

    }
    
  
  }

  const Login=async()=>{

    if(email == null || pass == null){
      Alert.alert('Please enter all fields')
    }
    else{
      console.log("login called");

      await auth().signInWithEmailAndPassword(email,pass).then((Luser)=>{
        console.log("login user is ",Luser.user.email);
         Navigation.navigate('Welcome',{name:Luser.user.email})
        
      }).catch(errl=>{
        setError(errl[0])
        Alert.alert(JSON.stringify(errl.code))
        console.log("error in login from usestate ",errl.code);
        
      })
    }
   
  }




  return (
    <SafeAreaView  style={{flex:1,justifyContent:'center'}}>
        <StatusBar
        barStyle={ 'light-content' }
        backgroundColor={'#4CAF50'}/>
    <View style={styles.container}>
      <Text style={styles.title}>
      {type=='SignUp' ? 'Sign Up ' : 'Login'}        </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#999"
      />
      
    
        <View style={styles.otpContainer}>
          <TextInput
            style={[styles.input, styles.otpInput]}
            placeholder="Password"
            value={pass}
            onChangeText={setPass}
            maxLength={6}
            secureTextEntry={true}
            placeholderTextColor="#999"
          />
          <TouchableOpacity
        style={[styles.button,  styles.sendButton,{opacity:type=='SignUp'?0.5 :1}]}
        onPress={type=='SignUp'? (()=>{setType('Login')}): Login}
        
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button,  styles.sendButton,{opacity:type=='SignUp'?1 :0.5}]}
        onPress={type=='SignUp'? SignUp :(()=>{setType('SignUp')}) }
        
      >
        <Text style={styles.buttonText}> Sign Up </Text>
      </TouchableOpacity>
        </View>
     
    </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 18,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 3, 
  },
  sendButton: {
    backgroundColor: '#4CAF50', 
  },
  resendButton: {
    backgroundColor: '#2196F3',
  },
  loginButton: {
    backgroundColor: '#FF9800',
    marginTop: 20, 
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  otpContainer: {
    width: '100%',
    alignItems: 'center',
  },
  otpInput: {
    width: '80%',
  },
});

export default LoginScreen;
