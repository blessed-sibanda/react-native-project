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
import {ThemeProvider} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

const Stack = createStackNavigator();

const AuthNavStack = () => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="CreateAccount" component={CreateAccount} />
  </Stack.Navigator>
);

const theme = {
  Input: {
    inputContainerStyle: {
      borderBottomColor: undefined,
      borderBottomWidth: undefined,
      borderRadius: EStyleSheet.value('12rem'),
    },
    leftIconContainerStyle: {
      marginRight: EStyleSheet.value('8rem'),
    },
  },
};

const App: () => Node = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthNavStack />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
