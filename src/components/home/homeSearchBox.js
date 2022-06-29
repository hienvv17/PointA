import React from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Styles from '../../styles/Styles';

export default function SearchBox() {
  return (
    <View style={Styles.searchBoxContainer}>
      <TouchableOpacity style={Styles.searchBox}>
        <Text>Tìm kiếm</Text>
        <AntDesign name="search1" size={24} color={'#3F3F46'} />
      </TouchableOpacity>
      <View style={Styles.filterBox}>
        <TouchableOpacity style={Styles.filter}>
          <AntDesign name="filter" size={24} color={'#7AC143'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
