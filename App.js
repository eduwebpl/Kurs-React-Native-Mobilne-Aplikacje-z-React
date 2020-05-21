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
import TodoList from './TodoList';
import WebView from 'react-native-webview';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import StackNavigator from './StackNavigator';
import ModalStackNavigator from './ModalStackNavigator';

//

const App = () => {
  return (
    <NavigationContainer>
      <ModalStackNavigator />
    </NavigationContainer>
  );
};

const Container = styled(View)`
  width: 100%;
  height: 100%;
`;

export default App;
