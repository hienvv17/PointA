import React from 'react';
import {View, Text, Image} from 'react-native';
import TestImg from '../../../assets/images/TestImg.jpg';
import Styles from '../../styles/Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

function LogoImage() {
  return (
    <Image source={TestImg} style={Styles.headerImage} resizeMode="contain" />
  );
}
export default function HeaderBar() {
  return (
    <View style={[Styles.headerContainer, {flex: 0.5}]}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 0.75,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 6,
          }}>
          <LogoImage />
        </View>
        <View
          style={{flex: 1.25, justifyContent: 'center', paddingHorizontal: 6}}>
          <Text style={Styles.headerText}>A Point</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingHorizontal: 8,
        }}>
        <MaterialCommunityIcons name="bell-badge" size={24} color={'#3280F0'} />
        <Octicons name="star" size={24} color={'#3280F0'} />
      </View>
    </View>
  );
}
