import React from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import logo from '../../../assets/images/logo.png';
import Styles from '../../styles/Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

function LogoImage() {
  return (
    <Image source={logo} style={Styles.headerImage} resizeMode="contain" />
  );
}
export default function HeaderBar() {
  return (
    <View style={[Styles.headerContainer]}>
      <View style={Styles.headerImageContainer}>
        <LogoImage />
        <Text style={Styles.headerText}>A Point</Text>
      </View>
      <View style={Styles.headerIconContainer}>
        <View style={[Styles.iconBox]}>
          <TouchableOpacity
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="bell-badge"
              size={24}
              color={'#7AC143'}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.iconBox}>
          <TouchableOpacity
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Octicons name="star" size={24} color={'#7AC143'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
