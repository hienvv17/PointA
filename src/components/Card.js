import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import Logo from '../../assets/images/logo.png';
import TestImg from '../../assets/images/TestImg.jpg';

export default function Card() {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#f5f5dc',
        overflow: 'hidden',
        flexDirection: 'column',
        marginRight: 15,
        marginBottom: 5,
      }}>
      <ImageBackground
        source={TestImg}
        style={{flex: 2, justifyContent: 'center'}}>
        <Text> this is area for event background</Text>
      </ImageBackground>
      <View style={{flex: 1}}>
        <Text>This is for area information</Text>
      </View>
    </View>
  );
}
