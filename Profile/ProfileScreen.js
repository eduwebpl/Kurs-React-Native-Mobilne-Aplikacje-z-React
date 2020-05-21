import React, {useState, useEffect, useCallback, useRef} from 'react';
import {View, TextInput, Keyboard, Platform, Animated} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import ProfileContainer from './ProfileContainer';
import {
  Container,
  DescriptionText,
  UpgradeButton,
  DescriptionButton,
  DescriptionButtonText,
  DescriptionInput,
  ProfileImage,
  ProfileNameText,
  UpgradeButtonText,
  Content,
  SetDescriptionWrapper,
  LevelIndicator,
  LevelIndicatorText,
  ProfileImageWrapper,
  Background,
} from './ProfileScreen.styled';
import * as Animatable from 'react-native-animatable';

//

const profileImage = require('../assets/image.jpg');

const ProfileScreen = () => {
  const [description, setDescription] = useState('Something...');
  const [currentText, setCurrentText] = useState('');

  const [level, setLevel] = useState(1);

  const photoAnim = useRef(new Animated.Value(1.0));
  const upgradeAnim = useRef(new Animated.Value(1.0));

  //

  const handleEffect = useCallback(() => {
    Animated.sequence([
      Animated.timing(photoAnim.current, {
        toValue: 1.2,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.delay(300),
      Animated.timing(photoAnim.current, {
        toValue: 1.0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useFocusEffect(handleEffect);

  //

  function onUpgradePress() {
    setLevel(level + 1);

    Animated.sequence([
      Animated.timing(upgradeAnim.current, {
        toValue: 1.2,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(upgradeAnim.current, {
        toValue: 1.0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }

  //

  function onDescriptionChange() {
    if (currentText.length < 3) {
      return;
    }

    setDescription(currentText);
    setCurrentText('');

    Keyboard.dismiss();
  }

  //

  const scaleTransform = anim => ({
    transform: [{scaleX: anim}, {scaleY: anim}],
  });

  //

  const backgroundAnim = {
    0: {
      opacity: 0,
    },
    0.5: {
      opacity: 0.3,
    },
    1: {
      opacity: 0.0,
    },
  };

  return (
    <ProfileContainer>
      <Container>
        {/* <Background
          animation={backgroundAnim}
          iterationCount={'infinite'}
          duration={1000}
          useNativeDriver={true}
        /> */}
        <Content>
          <ProfileImageWrapper>
            <ProfileImage
              style={scaleTransform(photoAnim.current)}
              source={profileImage}
            />
            <LevelIndicator style={scaleTransform(upgradeAnim.current)}>
              <LevelIndicatorText>{level}</LevelIndicatorText>
            </LevelIndicator>
          </ProfileImageWrapper>
          <View>
            <ProfileNameText>{'Jan Nowak'}</ProfileNameText>
            <DescriptionText>{description}</DescriptionText>
          </View>
          {/* <Animatable.View
            animation={'shake'}
            iterationCount={'infinite'}
            useNativeDriver={true}> */}
          <UpgradeButton
            onPress={onUpgradePress}
            onPressIn={() => console.log('onPressIn')}
            onPressOut={() => console.log('onPressOut')}>
            <UpgradeButtonText>{'UPGRADE'}</UpgradeButtonText>
          </UpgradeButton>
          {/* </Animatable.View> */}
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

export default ProfileScreen;
