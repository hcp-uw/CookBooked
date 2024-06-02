// Import core React functionality from the React package.
import React, { useState } from 'react'
// Import specific components and utilities from React Native for building the user interface.
import { Text, StyleSheet, Button, View, Image, Modal, Pressable, TouchableOpacity } from "react-native"
import { COLORS } from '../constants' 
import styles from './StartPage.style'

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

const ReceiptPage = ({ navigation }) => {

    const loginPage = () => {
        navigation.navigate('LoginScreen');
    };
    const signupPage = () => {
        navigation.navigate('SignupScreen');
    };
    return (
        <View style={styles.container}>
        
            <Image 
                source={require('../../assets/icons/CookBooked-logo.png')} 
                style={styles.image} 
            />
            <Text style={styles.titleText}>CookBooked</Text>
            <View style={styles.buttonContainer}>
                <CustomButton onPress={loginPage} title="Login" color={COLORS.primary} borderColor = {COLORS.primary} buttonTextStyle={styles.buttonTextWhite} />
                <CustomButton onPress={signupPage} title="Sign up" color={COLORS.white} borderColor = {COLORS.primary} buttonTextStyle={styles.buttonTextPink}/>
            </View>

        </View>
    )
}

export default ReceiptPage;