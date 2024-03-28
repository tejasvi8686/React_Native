import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../Screens/Home";
import Fav from "../Screens/Fav";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen name="Search" component={Search} options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" size={24} color="black" />
          ),
        }} />
      <Tab.Screen name="Fav" component={Fav} options={{
          tabBarLabel: "Fav",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={24} color="black" />
          ),
        }} />
      <Tab.Screen name="profile" component={Profile} options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={24} color="black" />
          ),
        }} />
    </Tab.Navigator>
  );
}
