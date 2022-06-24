/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React, {useState, Component} from 'react';
import {StyleSheet} from 'react-native';
import AppNavigator from './AppNavigator.js';

export default function App() {
  return <AppNavigator />;
}
