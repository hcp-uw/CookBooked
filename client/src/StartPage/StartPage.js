// Import core React functionality from the React package.
import React, { useState } from 'react'
// Import specific components and utilities from React Native for building the user interface.
import { Text, StyleSheet, Button, View, Image, Modal, Pressable, TouchableOpacity } from "react-native"
import { COLORS } from '../constants' 
import styles from './StartPage.style'
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

const StartPage = ({ navigation }) => {

    const loginPage = () => {
        navigation.navigate('LoginScreen');
    };
    const signupPage = () => {
        navigation.navigate('SignupScreen');
    };

    const startPage = () => {
        navigation.navigate('RealStartPage');
    };
      
    return (
        <View style={styles.container}>
        
            <Image 
                source={logo} 
                style={styles.image} 
            />
            <Text style={styles.titleText}>CookBooked</Text>
            <View style={styles.buttonContainer}>
                <CustomButton onPress={loginPage} title="Login" color={COLORS.primary} borderColor = {COLORS.primary} buttonTextStyle={styles.buttonTextWhite} />
                <CustomButton onPress={signupPage} title="Sign up" color={COLORS.white} borderColor = {COLORS.primary} buttonTextStyle={styles.buttonTextPink}/>
                {/* <Button onPress={startPage} title="Go to home" color="blue" /> */}
            </View>

        </View>
    )
}

export default StartPage;