import React from 'react';
import {View, Text, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBox() {
  return (
    <View
      style={{
        flex: 0.5,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'red',
      }}>
      <View
        style={{
          flex: 7,
          borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput placeholder="This is input box for search value" />
        <AntDesign name="search1" size={20} color={'#3280F0'} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <AntDesign name="filter" size={20} color={'#3280F0'} />
      </View>
    </View>
  );
}
