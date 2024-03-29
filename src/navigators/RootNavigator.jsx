import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstIntroScreen from '../screens/FirstIntroScreen';
import LastIntroScreen from '../screens/LastIntroScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <RootStack.Screen
          name="FirstIntroScreen"
          component={FirstIntroScreen}
        />
        <RootStack.Screen name="LastIntroScreen" component={LastIntroScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
