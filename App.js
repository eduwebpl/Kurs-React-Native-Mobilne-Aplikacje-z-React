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
import WebView from 'react-native-webview';

const App = () => {
  console.log('Start log');

  return (
    <SafeAreaView>
      <Container>
        <DynamicWebView
          source={{uri: 'https://wp.pl/'}}
          startInLoadingState={true}
          renderLoading={() => <Text>{'Loading...'}</Text>}
          renderError={() => <Text>{'Error!'}</Text>}
          onShouldStartLoadWithRequest={request => {
            console.log('WEBVIEW request = ', request.mainDocumentURL);

            if (request.mainDocumentURL.includes('wiadomosci')) {
              return false;
            }

            return true;
          }}
          onMessage={msg => {
            console.log('WEBVIEW msg = ', msg);
          }}
        />
      </Container>
    </SafeAreaView>
  );
};

const Container = styled(View)`
  width: 100%;
  height: 100%;
`;

const DynamicWebView = styled(WebView)`
  width: 100%;
  height: 100%;
`;

export default App;
