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

const App = () => {
  console.log('Start log');

  const webView = useRef(null);

  const injectJs = `document.querySelectorAll('p').forEach(p => p.style.fontSize = '50px');`;

  function onMakeitBigger() {
    webView.current.injectJavaScript(injectJs);
  }

  return (
    <SafeAreaView>
      <Container>
        <StaticWebView
          ref={webView}
          source={{html: '<h1>Title</h1><p>description</p>'}}
          startInLoadingState={true}
          // injectedJavaScript={injectJs}
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
        <Button title={'MAKE IT BIGGER!'} onPress={onMakeitBigger} />
      </Container>
    </SafeAreaView>
  );
};

const Container = styled(View)`
  width: 100%;
  height: 100%;
`;

const StaticWebView = styled(WebView)`
  width: 100%;
  height: 300px;
`;

export default App;
