import React from 'react';
import {View, Text, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Styles from '../../styles/Styles';

export default function SearchBox() {
  return (
    <View style={Styles.searchBoxContainer}>
      <View style={Styles.searchBox}>
        <TextInput placeholder="This is input box for search value" />
        <AntDesign name="search1" size={20} color={'#3280F0'} />
      </View>
      <View style={Styles.filter}>
        <AntDesign name="filter" size={20} color={'#3280F0'} />
      </View>
    </View>
  );
}
