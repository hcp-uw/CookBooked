import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SomeComponent from './src/SomeComponent';
import HomePage from './src/HomePage/HomePage';
import ReceiptPage from './src/ReceiptPage/ReceiptPage';
import VirtualPage from './src/VirtualPantry/VirtualPantry';
import StartPage from './src/StartPage/StartPage';
import RealStartPage from './src/StartPage/RealStartPage';
import rushiVirtualPantryPage from './src/VirtualPantry/rushiVirtualPantry';
import LoginScreen from './src/AuthPage/Login'
import SignupScreen from './src/AuthPage/Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="RealStartPage" component={RealStartPage} />
        <Stack.Screen name="ReceiptPage" component={ReceiptPage} />
        <Stack.Screen name="VirtualPantry" component={VirtualPage} />
        <Stack.Screen name="rushiVirtualPantry" component={rushiVirtualPantryPage} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}