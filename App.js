/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styled from 'styled-components';
import ProfileScreen from './ProfileScreen';
import TodoList from './TodoList';

const profileImage = require('./assets/image.jpg');

const App = () => {
  console.log('Start log');

  return (
    <SafeAreaView>
      <TodoList />
    </SafeAreaView>
  );
};

export default App;
