import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import TestImg from '../../../assets/images/TestImg.jpg';
import Styles from '../../styles/Styles';

export default function Event() {
  return (
    <View style={Styles.eventContainer}>
      <View style={Styles.allEventButton}>
        <Text style={Styles.sectionTitle}>Tích điểm</Text>
        <TouchableOpacity>
          <Text style={Styles.showAllButton}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={TestImg}
        resizeMode="cover"
        style={Styles.eventCoverImage}>
        <Text style={Styles.eventTitle}>SỨC HÚT TỪ SÂN CỎ</Text>
        <TouchableOpacity style={Styles.joinButton}>
          <Text style={{color: '#FFFFFF', fontSize: 14}}>Tham gia ngay</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
