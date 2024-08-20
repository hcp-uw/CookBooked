import React from 'react';
import { View, StyleSheet} from 'react-native';
import { COLORS } from '../constants' 
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from '../HomePage/HomePage';
import PantryPage from '../VirtualPantry/VirtualPantry';
import ReceiptPage from '../ReceiptPage/ReceiptPage';
import SearchPage from '../SearchPage/SearchPage';
import SettingPage from '../ProfilePage/Profile';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    // be able to hold and manage multiple tab screens
    <Tab.Navigator
      // to get rid of the top screen saying what page it is
      // need this for the individual tabs even you have it in the app
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Home'

      tabBar={({ navigation, state, descriptors, insets }) => (
        <View>
          <View style={styles.line}/> 
          <BottomNavigation.Bar
          navigationState={state}
          // says where the tabs should be
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              // when it is true it prevents the default action and lets us go to our page we want
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                // navigate to specified screen
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          // how to show the actual icon
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
        </View> 
      )}
    >
      <Tab.Screen
        name="Pantry"
        component={PantryPage}
        options={{
          tabBarLabel: 'Pantry',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="fridge" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="feature-search" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Receipts"
        component={ReceiptPage}
        options={{
          tabBarLabel: 'Receipts',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="receipt" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingPage}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  line: {
    height: 4,
    backgroundColor: COLORS.primary, 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});