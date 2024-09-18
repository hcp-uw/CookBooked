import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, TouchableOpacity } from 'react-native';
import { auth, db } from '../../../firebase.js';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import styles from './Signup.style'
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

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up:', user);
      await set(ref(db, 'users/' + user.uid), {
        username: user.email,
        email: user.email,
        pantry: {},
        receipts: {}
      });
      navigation.navigate('HomePage'); // should navigate to "sign in home page, not the login/signup pages"
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    } 
  };

  return (
    <View style={styles.container}>
      <Image 
        source={logo} 
        style={styles.image} 
      />
      <Text style={styles.titleText}>Welcome!</Text>
      <View style={styles.inputContainerOne}>
        <Text style={styles.subText}>Name</Text>
        <TextInput
          style={styles.smallInput}
          placeholder="Name"
          value={email}
          //onChangeText={setName}
          autoCapitalize="none"
          autoCompleteType="name"
        />
      </View>
      <View style={styles.inputContainerOne}>
        <Text style={styles.subText}>Email</Text>
        <TextInput
          style={styles.smallInput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCompleteType="email"
        />
      </View>
      <View style={styles.inputContainerOne}>
        <Text style={styles.subText}>Password</Text>
        <TextInput
          style={styles.smallInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCompleteType="password"
        />
      </View>
      <View style={styles.inputContainerOne}>
        <Text style={styles.subText}>Confirm Password</Text>
        <TextInput
          style={styles.smallInput}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCompleteType="password"
        />
      </View>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <View style={styles.buttonContainer}>
        <CustomButton onPress={handleSignUp} title="Sign Up" color={COLORS.primary} borderColor = {COLORS.primary} buttonTextStyle={styles.buttonTextWhite} />
      </View>
      <View style={styles.sameLineContainer}>
        <Text style={styles.accountText}>Already have an account?</Text> 
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.signUpText}>Login Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
