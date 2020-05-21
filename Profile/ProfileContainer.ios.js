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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const ProfileContainer = props => {
  return (
    <KeyboardAvoidingView behavior={'padding'}>
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default ProfileContainer;
