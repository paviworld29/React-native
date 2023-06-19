import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {darkGreen} from './Constants';

export default function Field(props) {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: darkGreen,
        paddingHorizontal: 10,
        width: '78%',
        backgroundColor: 'rgb(220,220,220)',
        marginVertical: 10,
      }}
      placeholderTextColor={darkGreen} >
        
      </TextInput>
  );
}
