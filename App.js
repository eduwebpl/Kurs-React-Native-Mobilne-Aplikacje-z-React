/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
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
import WebView from 'react-native-webview';
import {NavigationContainer} from '@react-navigation/native';

//

const App = () => {
  return (
    <NavigationContainer>
      <Container />
    </NavigationContainer>
  );
};

const Container = styled(View)`
  width: 100%;
  height: 100%;
`;

export default App;
