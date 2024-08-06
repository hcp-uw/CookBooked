// VirtualPantry.js
// This component renders the VirtualPantry where users can view and manage their pantry items.
// It includes a header, a list of PantryCard components to display individual pantry items,
// and functionality to update the quantity of each item. 

import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, ScrollView, Image, TouchableOpacity } from "react-native"; 
import styles from './Profile.style';
import { useUser } from '../../UserContext';
import PantryCard from '../Common/Cards/Pantry/PantryCard';
import { getDatabase, ref, push, onValue, update } from "firebase/database";
import firebase from "../../../firebase";
import { DIVIDER, images, icons } from '../constants';

const Profile = ({ navigation }) => {
    const { user } = useUser();

    function editProfile() {
        console.log("Opens popup to edit profile (can change image, display name)");
    }

    function manageAccount() {
        console.log("Open popup or new page to delete account, change password");
    }

    function bookmarks() {
        console.log("Opens bookmarks page");
    }

    return (
        <ScrollView>
        {/* // Header of Page  */}
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Your Profile</Text>
        </View>

        {/* Divider line (would want to move styling to themes?) */}
        <View style={DIVIDER.header}/>
        
        <View style={styles.card}>
            <View style={styles.userImg}>
                <Image
                    source={images.avatar}
                    resizeMode="contain"
                    style={styles.userProfileImage}
                />
            </View>
            <View style={styles.userInfo}>
                <Text style={styles.bold}>Welcome!</Text>
                <Text style={styles.bold}>{user.uid.substring(0,10)}...</Text>
                <Text>{user.email}</Text>
            </View>
            <View style={styles.editIcon}>
                <TouchableOpacity onPress={editProfile} style={{ backgroundColor: 'transparent', width: '100%', height: '100%' }}>
                    <Image
                        source={icons.edit}
                        resizeMode="contain"
                        style={styles.edit}
                    />
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity onPress={manageAccount}>
            <View style={styles.card}>
                <Text style={styles.bold}>⚙️ Manage Account</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={bookmarks}>
            <View style={styles.card}>
                <Text style={styles.bold}>🔖 Bookmarked</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
    )
}


export default Profile;
