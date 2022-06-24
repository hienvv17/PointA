import React from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Card from '../Card';

export default function Trend() {
  return (
    <View style={{flex: 4, borderWidth: 2, paddingHorizontal: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 10,
          flex: 0.2,
        }}>
        <Text style={{fontWeight: '500', fontSize: 15}}> Tích điểm</Text>
        <TouchableOpacity>
          <Text> Xem tất cả</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 0.2,
        }}>
        <Button title="Tất cả" />
        <Button title="Tất cả" />
        <Button title="Tất cả" />
        <Button title="Tất cả" />
      </View>

      {/* <ScrollView  contentContainerStyle={{flex: 0.2}}>
        <Button title="Tất cả" />
        <Button title="Tất cả" />
        <Button title="Tất cả" />
        <Button title="Tất cả" />
      </ScrollView> */}

      <ScrollView horizontal={true}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}
