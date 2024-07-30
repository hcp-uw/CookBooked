import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useUser } from '../../UserContext.js';
import styles from './Login.style'
import { COLORS } from '../constants' 
import logo from '../../assets/logo/LogoWhite.png'


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
  const { login, error } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();


  const handleLogin = async () => {
    const login_result = await login(email, password);
    if (login_result) {
      navigation.navigate('RealStartPage');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={logo} 
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
      <View style={styles.sameLineContainer}>
        <Text style={styles.accountText}>Don't Have Account?</Text> 
        <Text style={styles.signUpText}>Sign Up</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
