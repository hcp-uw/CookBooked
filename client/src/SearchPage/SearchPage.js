// SearchPage.js
// This page we can search for foods in our pantry
// and we can also search for recepies.

// Import core React functionality from the React package.
import React, { useState } from 'react';
// Import specific components and utilities from React Native for building the user interface.
import { Text, StyleSheet, Button, View, Image, Modal, Pressable, ScrollView } from "react-native"; 
import { StyleSheet } from "react-native";
import { DIVIDER, images, COLORS} from '../constants';
import styles from './SearchPage.style';

const SearchPage = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Search</Text>
                    <Image
                        source={images.avatar}
                        resizeMode="contain"
                        style={styles.userProfileImage}
                    />
                    {/* Divider line (would want to move styling to themes?) */}
                </View>
                <View style={DIVIDER.header}/>
                <View style={styles.searchBarContainer}>
                    <Icon name="search" size={30} color={COLORS.gray} style={styles.iconSearch}/>
                    <TextInput
                        underlineColor='transparent'
                        placeholder='Search Recipes'
                        placeholderTextColor={COLORS.gray2}
                        style={styles.searchBar}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default SearchPage;