import React from 'react';
import {View, Text, Image} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';
import Logo from '../../../assets/images/logo.png';
import TestImg from '../../../assets/images/TestImg.jpg';
import Styles from '../../styles/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

function LogoImage() {
  return (
    <Image source={TestImg} style={Styles.headerImage} resizeMode="contain" />
  );
}
export default function HeaderBar() {
  return (
    <View style={[Styles.headerContainer, {flex: 1}]}>
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
            paddingHorizontal: 8,
          }}>
          <LogoImage />
        </View>
        <View
          style={{flex: 1.25, justifyContent: 'center', paddingHorizontal: 8}}>
          <Text style={Styles.headerText}>A Point</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Ionicons name="md-search" size={24} color={'#3280F0'} />
        <Text>button2 </Text>
      </View>
    </View>
  );
}
