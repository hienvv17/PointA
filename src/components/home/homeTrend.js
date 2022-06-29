import React, {cloneElement} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Styles from '../../styles/Styles';
import Card from '../Card';

export default function Trend() {
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View style={Styles.trendContainer}>
      <View style={Styles.allTrendButton}>
        <Text style={Styles.sectionTitle}>Xu hướng</Text>
        <TouchableOpacity>
          <Text style={Styles.showAllButton}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.categoryList}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={Styles.trendList}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
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
      backgroundColor: '#7AC143',
      borderWidth: 1,
      paddingHorizontal: 15,
      marginRight: 10,
      borderRadius: 20,
      justifyContent: 'center',
    }}>
    <TouchableOpacity
      style={{width: '100%', height: '100%', justifyContent: 'center'}}>
      <Text style={{fontWeight: 'bold', color: '#ffffff'}}>{title}</Text>
    </TouchableOpacity>
  </View>
);
