import React, { Children } from 'react';
import {View, Text, ImageBackground} from 'react-native';

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground
        source={require('./assests/emobility.webp')}
        style={{height: '100%'}}
      />

      <View style={{position:"absolute"}}>
        {children}
      </View>
    </View>
  );
};

export default Background;
