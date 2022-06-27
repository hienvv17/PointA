import React from 'react';
import axios from 'axios';
import {Dimensions, View} from 'react-native';
import Trend from '../../components/home/Trend';
import Header from '../../components/home/Header';
import SearchBox from '../../components/home/SearchBox';
import Event from '../../components/home/Event';
import Styles from '../../styles/Styles';

export default class Home extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Header />
        <SearchBox />
        <Event />
        <Trend />
      </View>
    );
  }
}
