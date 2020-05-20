import React, {useState, useEffect, useCallback, useRef} from 'react';
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
  KeyboardAvoidingView,
  Platform,
  Animated,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {useFocusEffect} from '@react-navigation/native';

import ProfileContainer from './ProfileContainer';

import styled from 'styled-components';

const profileImage = require('./assets/image.jpg');

const ProfileScreen = () => {
  const [description, setDescription] = useState('Something...');
  const [currentText, setCurrentText] = useState('');

  const [level, setLevel] = useState(1);

  const photoAnim = useRef(new Animated.Value(100));

  //

  const handleEffect = useCallback(() => {
    Animated.timing(photoAnim.current, {
      toValue: 120,
      duration: 300,
    }).start();

    setTimeout(() => {
      Animated.timing(photoAnim.current, {
        toValue: 100,
        duration: 300,
      }).start();
    }, 310);
  }, []);

  useFocusEffect(handleEffect);

  function onUpgradePress() {
    console.log('Upgrade level!!!');

    setLevel(level + 1);
  }

  function onDescriptionChange() {
    if (currentText.length < 3) {
      return;
    }

    setDescription(currentText);

    setCurrentText('');

    Keyboard.dismiss();
  }

  return (
    <ProfileContainer>
      <Container>
        <Content>
          <ProfileImageWrapper>
            <ProfileImage
              style={{width: photoAnim.current, height: photoAnim.current}}
              source={{
                uri:
                  'https://steamrep.com/steamimage/avatars/50/50a284580d8318358eb3bb07fd29bb85d6dc82ff_full.jpg',
              }}
            />
            <LevelIndicator>
              <LevelIndicatorText>{level}</LevelIndicatorText>
            </LevelIndicator>
          </ProfileImageWrapper>
          <View>
            <ProfileNameText>{'Jan Nowak'}</ProfileNameText>
            <DescriptionText>{description}</DescriptionText>
          </View>
          <UpgradeButton
            onPress={onUpgradePress}
            onPressIn={() => console.log('onPressIn')}
            onPressOut={() => console.log('onPressOut')}>
            <UpgradeButtonText>{'UPGRADE'}</UpgradeButtonText>
          </UpgradeButton>
        </Content>
        <SetDescriptionWrapper>
          <DescriptionInput
            placeholder={'New description...'}
            value={currentText}
            onChangeText={setCurrentText}
            onSubmitEditing={onDescriptionChange}
          />
          <DescriptionButton onPress={onDescriptionChange}>
            <DescriptionButtonText>{'SET'}</DescriptionButtonText>
          </DescriptionButton>
        </SetDescriptionWrapper>
      </Container>
    </ProfileContainer>
  );
};

const Container = styled(View)`
  background-color: #eeeeee;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ProfileImage = styled(Animated.Image)`
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
  background-color: #cccccc;
  padding: 8px;
  flex: 1;
`;

const DescriptionButton = styled(TouchableOpacity)`
  background-color: red;
  padding: 8px;
  border-radius: 4px;
  width: 80px;
  justify-content: center;
  align-items: center;
`;

const DescriptionButtonText = styled(Text)`
  color: white;
`;

const SetDescriptionWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  height: 50px;
`;

const LevelIndicator = styled(View)`
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: 0;
`;

const LevelIndicatorText = styled(Text)`
  color: white;
  font-size: 12px;
  text-align: center;
`;

const ProfileImageWrapper = styled(View)``;

const Content = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ProfileScreen;
