import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
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
    <View style={[Styles.headerContainer, {flex: 0.5}]}>
      <View style={Styles.imageContainer}>
        <LogoImage />

        <Text style={Styles.headerText}>A Point</Text>
      </View>
      <View style={Styles.iconContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="bell-badge"
            size={24}
            color={'#3280F0'}
            style={Styles.headericon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons
            name="star"
            size={24}
            color={'#3280F0'}
            style={Styles.headericon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
