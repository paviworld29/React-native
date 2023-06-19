import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, TextInput} from 'react-native';
import Background from './Background';
import {darkGreen} from './Constants';
import Forget from './Forget';
export default function Login(props) {
  const [a, setA] = useState(undefined);
  const [email, setemail] = useState(undefined);
  const [pwd, setpwd] = useState(undefined);

  const postExample = async () => {
    try {
      await fetch('https://shivaconceptdigital.com/api/loginmobile.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          pwd: pwd,
        }),
      })
        .then(response => response.json())
        .then(responseData => {
          setA(JSON.stringify(responseData.msg));
          console.log(JSON.stringify(responseData.msg));
        })
        .done();
    } catch (error) {
      //  console.error(error)
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
            marginVertical: 10,
          }}>
          login
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
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              fontSize: 19,
              color: 'grey',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account{' '}
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
            keyboardType={'email-address'}
            onChangeText={v => {
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
            placeholder="Enter  Password"
            secureTextEntry={true}
            onChangeText={v => {
              setpwd(v);
            }}></TextInput>
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16}}>
            <TouchableOpacity  onPress={() => props.navigation.navigate('Forget')}>
              <Text
                style={{
                  color: darkGreen,
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginBottom: 160,
                }}>
                Forgot Password ?
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={addTogether}
              style={{
                backgroundColor: '#1E2F97',
                borderRadius: 100,
                alignItems: 'center',
                width: 350,
                paddingVertical: 5,
                marginVertical: 10,
              }}>
              <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
                Login
              </Text>
            </TouchableOpacity>
            <Text>{a}</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text
                style={{fontWeight: 'bold', color: darkGreen, fontSize: 16}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}
