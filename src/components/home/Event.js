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
import Styles from '../../styles/Styles';

export default function Event() {
  return (
    <View style={Styles.eventContainer}>
      <View style={Styles.allEventButton}>
        <Text style={{fontWeight: '500', fontSize: 15}}> Tích điểm</Text>
        <TouchableOpacity>
          <Text> Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={TestImg}
        resizeMode="cover"
        style={Styles.eventCoverImage}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
          SỨC HÚT TỪ SÂN CỎ
        </Text>
        <Button title="Tham gia ngay" color="pink" />
      </ImageBackground>
    </View>
  );
}
