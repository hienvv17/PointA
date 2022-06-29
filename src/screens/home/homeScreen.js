import React from 'react';
import axios from 'axios';
import {Dimensions, View} from 'react-native';
import Trend from '../../components/home/homeTrend';
import Header from '../../components/home/homeHeader';
import SearchBox from '../../components/home/homeSearchBox';
import Event from '../../components/home/homeEvent';
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
