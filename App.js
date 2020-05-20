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

const profileImage = require('./assets/image.jpg');

const App = () => {
  console.log('Start log');

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'red',
          width: '100%',
          height: '100%',
        }}>
        {/* <View style={{backgroundColor: 'blue', width: '100%', height: 200}} /> */}

        <Image
          style={{width: 100, height: 100}}
          source={{
            uri:
              'https://steamrep.com/steamimage/avatars/50/50a284580d8318358eb3bb07fd29bb85d6dc82ff_full.jpg',
          }}
        />
        <Text style={{fontSize: 20}}>{'Jan Nowak'}</Text>
        <Text>{'something cool here...'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
