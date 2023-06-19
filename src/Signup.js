

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, TextInput,Button, StyleSheet} from 'react-native';
import Background from './Background';
import {darkGreen} from './Constants';


export default function Signup(props) {
  const [a, setA] = useState(undefined);
  const [email, setemail] = useState(undefined);
  const [password, setpassword] = useState(undefined);
  const [mobile, setmobile] = useState(undefined);
  const [fullname, setfullname] = useState(undefined);
  const [statename, setstatename] = useState(undefined);
  const [cityname, setcityname] = useState(undefined);
  const postExample = async () => {
    try {
      await fetch('https://shivaconceptdigital.com/api/regmobile.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          pwd: password,
          mobile: mobile,
          fullname: fullname,
          statename: statename,
          cityname: cityname,
        }),
      })
        .then(response => response.json())
        .then(responseData => {
          setA(JSON.stringify(responseData.msg));
          console.log(JSON.stringify(responseData.msg));
        })
        .done();
    } catch (error) {
      // console.error(error);
    }
  };
  function addTogether() {
    postExample();
  }

  return (
    <Background>
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            marginBottom: 20,
            fontWeight: 'bold',
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 400,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
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
            keyboardType={'email-address'}  onChangeText={v => {
              setemail(v);  
          }}></TextInput>

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
            placeholder="Create Password"
            secureTextEntry={true} onChangeText={v => {
              setpassword(v);  
          }}></TextInput>

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
            placeholder="Contact Number"
            keyboardType="numeric" onChangeText={v => {
              setmobile(v);  
          }}></TextInput>

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
            placeholder="Full Name" onChangeText={v => {
              setfullname(v);  
          }}></TextInput>

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
            placeholder="State Name" onChangeText={v => {
              setstatename(v);  
          }}></TextInput>
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
            placeholder="City Name" onChangeText={v => {
              setcityname(v);  
          }}></TextInput>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              By signing in, you agree to our{' '}
            </Text>
            <TouchableOpacity>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
              justifyContent: 'center',
              marginBottom: 5,
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>and </Text>
            <TouchableOpacity>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity onPress={addTogether}
      style={{
        backgroundColor: '#1E2F97',
        borderRadius: 100,
        alignItems: 'center',
        width:350,
        paddingVertical:5,
        marginVertical:10,
        
      }}>
      <Text style={{color:'white', fontSize: 25, fontWeight: 'bold', }}>
        Signup
      </Text>
    </TouchableOpacity>
        {/* <Text>{a}</Text> */}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{fontWeight: 'bold', color: darkGreen, fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}


const styles = StyleSheet.create({
  Textinputs:{
    textAlign:'center'
  }
})