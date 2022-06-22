import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import TestImg from '../../../assets/images/TestImg.jpg';

export default function Trend() {
  return (
    <View style={{flex: 2.5}}>
      <ImageBackground
        source={TestImg}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
        <Text>this is for Trend event area</Text>
      </ImageBackground>
      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 4}}> Xu hướng</Text>
        <Text style={{flex: 2}}> Xem tất cả</Text>
      </View>
    </View>
  );
}
