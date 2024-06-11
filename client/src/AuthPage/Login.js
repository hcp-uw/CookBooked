import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from './Login.style'
import { COLORS } from '../constants' 

const CustomButton = ({onPress, title, color, buttonTextStyle, borderColor}) => {
  return (
      <TouchableOpacity 
          style={[styles.button, { backgroundColor: color, borderColor: borderColor }]} 
          onPress={onPress}
      >
          <Text style={buttonTextStyle}>{title}</Text>
      </TouchableOpacity>
  )
}


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigation.navigate('Home');
      console.log('User logged in:', user);
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/icons/CookBooked-logo.png')} 
        style={styles.image} 
      />
      <Text style={styles.titleText}>Welcome back!</Text>
      <View style={styles.inputContainerOne}>
        <Text style={styles.subText}>Email</Text>
        <TextInput
          style={styles.smallInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
        />
      </View>
      <View style={styles.inputContainerTwo}>
        <Text style={styles.subText}>Password</Text>
        <TextInput
          style={styles.smallInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCompleteType="password"
        />
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <View style={styles.buttonContainer}>
        <CustomButton onPress={handleLogin} title="Login" color={COLORS.primary} borderColor = {COLORS.primary} buttonTextStyle={styles.buttonTextWhite} />
      </View>
    </View>
  );
};

export default LoginScreen;
