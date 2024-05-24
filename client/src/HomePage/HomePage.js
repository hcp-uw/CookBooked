import { React, useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from "react-native";
import { auth } from '../../firebase'

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  }
});

export default HomePage;
