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

import {useFocusEffect} from '@react-navigation/native';

import ProfileContainer from './ProfileContainer';

import styled from 'styled-components';

export const Container = styled(Animated.View)`
  background-color: #eeeeee;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Background = styled(Animated.View)`
  background-color: #ff0000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ProfileImage = styled(Animated.Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const ProfileNameText = styled(Text)`
  font-size: 20px;
`;

export const DescriptionText = styled(Text)`
  font-size: 16px;
  color: gray;
`;

export const UpgradeButton = styled(TouchableOpacity)`
  background-color: blue;
  padding: 8px;
  border-radius: 4px;
  margin-top: 20px;
`;

export const UpgradeButtonText = styled(Text)`
  color: white;
`;

export const DescriptionInput = styled(TextInput)`
  background-color: #cccccc;
  padding: 8px;
  flex: 1;
`;

export const DescriptionButton = styled(TouchableOpacity)`
  background-color: red;
  padding: 8px;
  border-radius: 4px;
  width: 80px;
  justify-content: center;
  align-items: center;
`;

export const DescriptionButtonText = styled(Text)`
  color: white;
`;

export const SetDescriptionWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  height: 50px;
`;

export const LevelIndicator = styled(Animated.View)`
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const LevelIndicatorText = styled(Text)`
  color: white;
  font-size: 12px;
  text-align: center;
`;

export const ProfileImageWrapper = styled(View)``;

export const Content = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
