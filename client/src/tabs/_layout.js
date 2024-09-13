import { Tabs } from 'expo-router/stack';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen name="Home" />
            <Tabs.Screen name="Add" />
            <Tabs.Screen name="Receipts" />
            <Tabs.Screen name="Search" />
            <Tabs.Screen name="Pantry" />
        </Tabs>
    )
}