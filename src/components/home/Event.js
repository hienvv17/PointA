import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Card from '../Card';

export default function Event() {
  return (
    <View style={{flex: 3.5, borderWidth: 2}}>
      <ScrollView horizontal={true}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}
