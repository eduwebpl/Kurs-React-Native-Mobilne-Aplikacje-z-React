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
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={{
            uri:
              'https://steamrep.com/steamimage/avatars/50/50a284580d8318358eb3bb07fd29bb85d6dc82ff_full.jpg',
          }}
        />
        <Text style={styles.profileNameText}>{'Jan Nowak'}</Text>
        <Text style={styles.descriptionText}>{'something cool here...'}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileNameText: {
    fontSize: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: 'grey',
  },
});

export default App;
