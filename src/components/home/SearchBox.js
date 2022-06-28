import React from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Styles from '../../styles/Styles';

export default function SearchBox() {
  return (
    <View style={Styles.searchBoxContainer}>
      <View style={Styles.searchBox}>
        <TextInput placeholder="This is input box for search value" />
        <TouchableOpacity style={{marginRight: '5%'}}>
          <AntDesign name="search1" size={24} color={'#3F3F46'} />
        </TouchableOpacity>
      </View>
      <View style={Styles.filter}>
        <TouchableOpacity
          style={{
            height: '90%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            //borderWidth: 1,
            borderRadius: 10,
            backgroundColor: '#EBF2E6',
          }}>
          <AntDesign name="filter" size={24} color={'#7AC143'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
