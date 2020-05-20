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

const profileImage = require('./assets/image.jpg');

const ProfileScreen = () => {
  console.log('Start log');

  return (
    <Container>
      <ProfileImage
        source={{
          uri:
            'https://steamrep.com/steamimage/avatars/50/50a284580d8318358eb3bb07fd29bb85d6dc82ff_full.jpg',
        }}
      />
      <ProfileNameText>{'Jan Nowak'}</ProfileNameText>
      <DescriptionText>{'something cool here...'}</DescriptionText>
    </Container>
  );
};

const Container = styled(View)`
  background-color: #eeeeee;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const ProfileNameText = styled(Text)`
  font-size: 20px;
`;

const DescriptionText = styled(Text)`
  font-size: 16px;
  color: gray;
`;

export default ProfileScreen;
