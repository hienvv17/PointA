import React from 'react';
import {View, Text, Image} from 'react-native';

export default function PointShow() {
  return (
    <View
      style={{
        flex: 0.5,
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'red',
      }}>
      <View style={{flex: 4}}>
        <Text>this is for Pointbar</Text>
      </View>
      <View style={{flex: 1}}>
        <Text> 2 button </Text>
      </View>
    </View>
  );
}
