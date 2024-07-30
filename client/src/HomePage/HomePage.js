import * as React from 'react';
import styles from './HomePage.style';
import { useUser } from '../../UserContext';
import { Text, StyleSheet, ScrollView, Button, View, Image, Modal, Pressable, FlatList } from "react-native"; 
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { COLORS } from '../constants';
// Import the mainPageCard component where custom card components are stored.
import MainPageCard from '../Common/Cards/mainPage/mainPageCard';




const HomePage = ({ navigation }) => {
  const { user, logout } = useUser();
  
  const foodPrints = [
    { id: '1', title: 'Salad'},
    { id: '2', title: 'Chicken'},
    { id: '3', title: 'Beef'},
    { id: '4', title: 'Beef'},
    { id: '5', title: 'Beef'},
    { id: '6', title: 'Beef'},
    { id: '7', title: 'Beef'},
  ]

  const fastMake = [
    { id: '1', title: 'Bruschetta'},
    { id: '2', title: 'BLT'},
    { id: '3', title: 'rice and chicken'},
    { id: '4', title: 'Beef'},
    { id: '5', title: 'Beef'},
    { id: '6', title: 'Beef'},
    { id: '7', title: 'Beef'},
  ]

  async function userLogout() {
    await logout();
    navigation.navigate('StartPage');
  }

  const renderItem = ({ item }) => (
    <MainPageCard
      itemName={item.title}
    >
    </MainPageCard>
  )
  return (
    // if you want to implement styles for ScrollView use contentContainer Style
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../../../client/assets/foodImg/CBTofuSalad.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.searchBarContainer}>
          <Icon name="search" size={30} color={COLORS.gray} style={styles.iconSearch}/>
          <TextInput
            underlineColor='transparent'
            placeholder='Search Recipes'
            placeholderTextColor={COLORS.gray2}
            style={styles.searchBar}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Welcome, {user ? user.email : 'Guest'}</Text>
          <Text style={styles.textStyle}>Your foodprints</Text>
          <FlatList
            // each card we want to create
            data={foodPrints}
            // creates the actual card for each iteration
            renderItem={renderItem}
            // each unique key
            keyExtractor={item => item.id}
            // make the list scroll horizontally 
            horizontal={true}
            // controls if the horizontal scroll indicator is shown
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Fastest to make</Text>
          <FlatList
            // each card we want to create
            data={fastMake}
            // creates the actual card for each iteration
            renderItem={renderItem}
            // each unique key
            keyExtractor={item => item.id}
            // make the list scroll horizontally 
            horizontal={true}
            // controls if the horizontal scroll indicator is shown
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <Button title="Logout" onPress={userLogout} color="#F2555A" />
        </View>
      </View>
    </ScrollView>
  )
}

export default HomePage;
// import * as React from 'react';
// import { Button, StyleSheet, Text, View } from "react-native";
// import { auth } from '../../firebase'
// import styles from './HomePage.style'
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import {useState, useEffect} from 'react';

// const HomePage = ({ navigation }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });    
//     return unsubscribe;
//   }, []);

//   const handleButtonClickReceipt = () => {
//     console.log("Button clicked!");
//     navigation.navigate('ReceiptPage');
//     // You can perform any action you want here
//   };

//   const handleButtonClickTab = () => {
//     console.log("Button clicked!");
//     navigation.navigate('HomePage');
//     // You can perform any action you want here
// };
//   const loginPage = () => {
//     navigation.navigate('LoginScreen');
//   };
//   const signupPage = () => {
//     navigation.navigate('SignupScreen');
//   };
//   const logout = async () => {
//     try {
//       await auth.signOut();
//       navigation.navigate('HomePage');
//       setUser(null);
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text>CookBooked</Text>
//       {user ? (
//         <View>
//           <Text>Welcome, {user.email}</Text>
//           <Button onPress={logout} title="Logout" color="#F2555A" />
//           <Button onPress={handleButtonClickReceipt} title="Click me!" color="#F2555A" />
//         </View>
//       ) : (
//         <View>
//           <Button onPress={handleButtonClickReceipt} title="Click me!" color="#F2555A" />
//           <Button onPress={loginPage} title="Login!" color="#F2555A" />
//           <Button onPress={signupPage} title="Signup!" color="#F2555A" />
//         </View>
//       )}
//       {(
//       <NavigationContainer>
//         <Tab.Navigator
//           initialRouteName={'HomePage'}
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
//               let rn = route.name;

//               if (rn === 'homePage') {
//                 iconName = focused ? 'home' : 'home-outline'
//               }

//               return <Ionicons name={iconName} size={size} color={color}/>;
//             },
//           })}
//           tabBarOptions={{
//             activeTintColor: 'tomato',
//             inactiveTintColor: 'grey',
//             labelStyle: {paddingBottom: 10, fontSize: 10 },
//             style: {padding: 10, height: 70}
//           }}
//           >
//           <Tab.Screen name='LoginPage' component={loginPage}/>
//         </Tab.Navigator>
//       </NavigationContainer> 
//     )}
//     </View>
//   );
// }

// export default HomePage;
