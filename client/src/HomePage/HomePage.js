import * as React from 'react';
import { Button, StyleSheet, Text, View } from "react-native";
import { auth } from '../../firebase'
import styles from './HomePage.style'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useState, useEffect} from 'react';

const Tab = createBottomTabNavigator();

const HomePage = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });    
    return unsubscribe;
  }, []);

  const handleButtonClick = () => {
    console.log("Button clicked!");
    navigation.navigate('ReceiptPage');
    // You can perform any action you want here
  };
  const loginPage = () => {
    navigation.navigate('LoginScreen');
  };
  const signupPage = () => {
    navigation.navigate('SignupScreen');
  };
  const logout = async () => {
    try {
      await auth.signOut();
      navigation.navigate('HomePage');
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>CookBooked</Text>
      {user ? (
        <View>
          <Text>Welcome, {user.email}</Text>
          <Button onPress={logout} title="Logout" color="#F2555A" />
          <Button onPress={handleButtonClick} title="Click me!" color="#F2555A" />
        </View>
      ) : (
        <View>
          <Button onPress={handleButtonClick} title="Click me!" color="#F2555A" />
          <Button onPress={loginPage} title="Login!" color="#F2555A" />
          <Button onPress={signupPage} title="Signup!" color="#F2555A" />
        </View>
      )}
      {(
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'HomePage'}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === 'homePage') {
                iconName = focused ? 'home' : 'home-outline'
              }

              return <Ionicons name={iconName} size={size} color={color}/>;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: {paddingBottom: 10, fontSize: 10 },
            style: {padding: 10, height: 70}
          }}
          >
          <Tab.Screen name='LoginPage' component={loginPage}/>
        </Tab.Navigator>
      </NavigationContainer> 
    )}
    </View>
  );
}

export default HomePage;
