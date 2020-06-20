import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './pages/Home';
const Home = createStackNavigator();


export default function HomeRoute() {
 return (
  <Home.Navigator screenOptions={{
    headerShown: false,
    cardStyle: {backgroundColor: '#151515'}
  }}>
    <Home.Screen name="Home" component={HomeScreen}/>
  </Home.Navigator>
  )
}