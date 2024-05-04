import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomePage from './src/HomePage/HomePage';
import ReceiptPage from './src/ReceiptPage/ReceiptPage';
import VirtualPage from './src/VirtualPantry/VirtualPantry';
import rushiVirtualPantryPage from './src/VirtualPantry/rushiVirtualPantry';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ReceiptPage" component={ReceiptPage} />
        <Stack.Screen name="VirtualPantry" component={VirtualPage} />
        <Stack.Screen name="rushiVirtualPantry" component={rushiVirtualPantryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}