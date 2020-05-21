import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodoList from './TodoList';
import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'List'}
        component={TodoList}
        options={{
          headerTitle: 'Main Page',
        }}
      />
      <Stack.Screen
        name={'Details'}
        component={DetailsScreen}
        options={{
          headerBackTitle: 'back',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
