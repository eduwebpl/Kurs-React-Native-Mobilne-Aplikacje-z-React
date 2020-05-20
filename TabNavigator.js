import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodoList from './TodoList';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: ({focus}) => (
          <Text>{route.name === 'Profile' ? 'PROFILE' : 'LIST'}</Text>
        ),
        tabBarIcon: ({focused}) =>
          route.name === 'Profile' ? (
            <TabSquareIcon focused={focused} />
          ) : (
            <TabRoundIcon focused={focused} />
          ),
      })}>
      <Tab.Screen name={'List'} component={TodoList} />
      <Tab.Screen name={'Profile'} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

//
const TabSquareIcon = styled(View)`
  width: 20px;
  height: 20px;
  background-color: gray;
  opacity: ${p => (p.focused ? 1.0 : 0.2)};
`;

const TabRoundIcon = styled(TabSquareIcon)`
  border-radius: 10px;
`;

export default TabNavigator;
