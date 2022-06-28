import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Styles from '../../styles/Styles';
import Card from '../Card';

export default function Trend() {
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View style={Styles.trendContainer}>
      <View style={Styles.allTrendButton}>
        <Text style={{fontWeight: '500', fontSize: 15, borderWidth: 1}}>
          Tích điểm
        </Text>
        <TouchableOpacity>
          <Text style={{borderWidth: 1}}> Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.trendlist}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>

      <ScrollView horizontal={true}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d',
    title: '4 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-15571e2',
    title: '5d Item',
  },
  {
    id: '58694a0f-3da1-47f-bd96-145571e2',
    title: '6 Item',
  },
];

const Item = ({title}) => (
  <View
    style={{
      backgroundColor: 'powder blue',
      borderWidth: 2,
      paddingHorizontal: 20,
      marginHorizontal: 10,
    }}>
    <Text style={{fontWeight: 'bold'}}>{title}</Text>
  </View>
);
