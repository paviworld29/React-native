import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import Background from './Background';
import {darkGreen} from './Constants';

export default function Forget(props) {
  function addTogether() {
    Alert.alert("Login code sent to your email")
  }

  return (
    <Background>
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Find your account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 400,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: darkGreen, fontWeight: 'bold',marginBottom:30}}>
            Enter your username or email
          </Text>
          
          <TextInput
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: '78%',
              backgroundColor: 'rgb(220,220,220)',
              marginVertical: 10,
            }}
            placeholderTextColor={darkGreen}
            placeholder="Enter  Email"
            keyboardType={'email-address'}></TextInput>

          
          <View>
            <TouchableOpacity onPress={addTogether}
              style={{
                backgroundColor: '#1E2F97',
                borderRadius: 100,
                alignItems: 'center',
                width: 350,
                paddingVertical: 5,
                marginVertical: 10,
              }} >
              <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}} >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}
