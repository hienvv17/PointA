import React from 'react';
import axios from 'axios';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Event from '../../components/home/Event';
import Header from '../../components/home/Header';
import SearchBox from '../../components/home/SearchBox';
import Trend from '../../components/home/Trend';
import PointShow from '../../components/home/Point';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <SearchBox />
        <PointShow />
        <Trend />
        <Event />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
