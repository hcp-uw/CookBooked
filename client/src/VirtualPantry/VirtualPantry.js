import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Button, View, ScrollView } from "react-native";
import styles from './VirtualPantry.style';
import PantryCard from '../Common/Cards/Pantry/PantryCard';
import { getDatabase, ref, push, onValue } from "firebase/database";
import firebase from "../../firebase";
import { loadPantry } from '../constants';


const VirtualPantry = ({ navigation }) => {
    const [items, setItems] = useState([]);
    const [pantryText, setPantryText] = useState('loading...');

    useEffect(() => {
        const db = getDatabase(firebase);
        const itemsRef = ref(db, 'foodItems');

        const unsubscribe = onValue(itemsRef, (snapshot) => {
            const data = snapshot.val();
            const loadedItems = [];
            for (const key in data) {
                loadedItems.push({
                    id: key,
                    ...data[key]
                });
            }
            setItems(loadedItems);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const init = async () => {
            try {
                const data = await loadPantry();
                setPantryText(formatPantryText(data));
            } catch (error) {
                console.error('Error fetching data:', error);
                setPantryText('No data available');
            }
        };
        init();
    }, []);

    const handleRefresh = async () => {
        try {
            const data = await loadPantry();
            setPantryText(formatPantryText(data));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const formatPantryText = (data) => {
        if (!data) return 'No data available';
        let pantryText = `${data.username}'s Pantry Contents:\n`;
        for (let [item, quantity] of Object.entries(data.pantry)) {
            pantryText += `${item}: ${quantity}\n`;
        }
        return pantryText;
    };

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Your Pantry</Text>
                <Button
                    onPress={handleRefresh}
                    title="Refresh"
                    color="#841584"
                    accessibilityLabel="Button to refresh pantry"
                />
            </View>

            <View
                style={{
                    borderColor: '#F2555A',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    borderWidth: 1,
                    margin: 10
                }}
            />
            
            <View>
                <Text>{pantryText}</Text>
            </View>

            <ScrollView style={styles.container}>
                {items.map(item => (
                    <PantryCard
                        key={item.id}
                        itemId={item.id}
                        itemName={item.name}
                        lastAdded={item.lastAdded}
                        numItems={item.numItems}
                        handleNavigate={() => handleNavigate(item.id)}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default VirtualPantry;
