/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text} from 'react-native';
import SignIn from './src/scene/auth/SignIn';
import CreateAccount from './src/scene/auth/CreateAccount';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const AuthNavStack = () => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="CreateAccount" component={CreateAccount} />
  </Stack.Navigator>
);

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <AuthNavStack />
    </NavigationContainer>
  );
};

export default App;
