import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstIntroScreen from '../screens/FirstIntroScreen';
import LastIntroScreen from '../screens/LastIntroScreen';
import LoginScreen from '../screens/LoginScreen';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen
          name="FirstIntroScreen"
          component={FirstIntroScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="LastIntroScreen"
          component={LastIntroScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
