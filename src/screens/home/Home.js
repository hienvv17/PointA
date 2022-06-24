import React from 'react';
import axios from 'axios';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Trend from '../../components/home/Trend';
import Header from '../../components/home/Header';
import SearchBox from '../../components/home/SearchBox';
import Event from '../../components/home/Event';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <SearchBox />
        <Event />
        <Trend />
      </View>
    );
  }
}
