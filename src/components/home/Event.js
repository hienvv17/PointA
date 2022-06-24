import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import TestImg from '../../../assets/images/TestImg.jpg';

export default function Event() {
  return (
    <View style={{flex: 2, paddingVertical: 10, marginHorizontal: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 10,
        }}>
        <Text style={{fontWeight: '500', fontSize: 15}}> Tích điểm</Text>
        <TouchableOpacity>
          <Text> Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={TestImg}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          borderRadius: 25,
          resizeMode: 'cover',
          overflow: 'hidden',
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
          SỨC HÚT TỪ SÂN CỎ
        </Text>
        <Button title="Tham gia ngay" color="pink" />
      </ImageBackground>
    </View>
  );
}
