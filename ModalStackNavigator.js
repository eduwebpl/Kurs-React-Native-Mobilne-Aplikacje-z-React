import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodoList from './TodoList';
import DetailsScreen from './DetailsScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const ModalStackNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'} mode={'modal'}>
      <Stack.Screen name={'Main'} component={TabNavigator} />
      <Stack.Screen name={'ModalDetails'} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default ModalStackNavigator;
