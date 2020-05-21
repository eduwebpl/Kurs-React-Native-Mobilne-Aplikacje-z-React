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
} from './ProfileScreen.styled';

//

const profileImage = require('../assets/image.jpg');

const ProfileScreen = () => {
  const [description, setDescription] = useState('Something...');
  const [currentText, setCurrentText] = useState('');

  const [level, setLevel] = useState(1);

  const photoAnim = useRef(new Animated.Value(1.0));
  const upgradeAnim = useRef(new Animated.Value(1.0));

  const upgradeButtonAnim = useRef(new Animated.Value(1.0));

  //

  function startUpgradeButtonAnim() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(upgradeButtonAnim.current, {
          toValue: 1.2,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(300),
        Animated.timing(upgradeButtonAnim.current, {
          toValue: 1.0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }

  useEffect(() => startUpgradeButtonAnim(), []);

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

  return (
    <ProfileContainer>
      <Container>
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
          <UpgradeButton
            style={scaleTransform(upgradeButtonAnim.current)}
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

export default ProfileScreen;
