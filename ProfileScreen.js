/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Keyboard,
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
  const [description, setDescription] = useState('Something...');
  const [currentText, setCurrentText] = useState('');

  console.log('Start log');

  function onUpgradePress() {
    console.log('Upgrade level!!!');
  }

  function onDescriptionChange() {
    setDescription(currentText);

    setCurrentText('');

    Keyboard.dismiss();
  }

  return (
    <Container>
      <ProfileImage
        source={{
          uri:
            'https://steamrep.com/steamimage/avatars/50/50a284580d8318358eb3bb07fd29bb85d6dc82ff_full.jpg',
        }}
      />
      <ProfileNameText>{'Jan Nowak'}</ProfileNameText>
      <DescriptionText>{description}</DescriptionText>

      <UpgradeButton
        onPress={onUpgradePress}
        onPressIn={() => console.log('onPressIn')}
        onPressOut={() => console.log('onPressOut')}>
        <UpgradeButtonText>{'UPGRADE'}</UpgradeButtonText>
      </UpgradeButton>

      <DescriptionInput
        placeholder={'New description...'}
        value={currentText}
        onChangeText={setCurrentText}
        onSubmitEditing={onDescriptionChange}
      />
      <DescriptionButton onPress={onDescriptionChange}>
        <DescriptionButtonText>{'Set description'}</DescriptionButtonText>
      </DescriptionButton>
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

const UpgradeButton = styled(TouchableOpacity)`
  background-color: blue;
  padding: 8px;
  border-radius: 4px;
  margin-top: 20px;
`;

const UpgradeButtonText = styled(Text)`
  color: white;
`;

const DescriptionInput = styled(TextInput)`
  width: 100%;
  height: 50px;
  background-color: #cccccc;
  margin-top: 10px;
  padding: 8px;
`;

const DescriptionButton = styled(TouchableOpacity)`
  background-color: red;
  padding: 8px;
  border-radius: 4px;
  margin-top: 5px;
`;

const DescriptionButtonText = styled(Text)`
  color: white;
`;

export default ProfileScreen;
