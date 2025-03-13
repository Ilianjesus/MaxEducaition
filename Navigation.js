// Importaciones
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import CoursesScreen from "./screens/CoursesScreen";
import Course from "./screens/Course";
import RecommendationsScreen from "./screens/RecommendationsScreen";
import Lesson from "./screens/Lesson";

// STACK NAVIGATOR GLOBAL
const Stack = createNativeStackNavigator();

function MyTabs() {
    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "black",
            }}>
                
            <Tab.Screen 
                 name="Home" 
                 component={HomeScreen}
                 options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" size={30} color="black" />
                        ),
                        tabBarBadge: 10,
                        headerShown: false,
                    }} 
            />
            <Tab.Screen 
                 name="Search" 
                 component={SearchScreen}
                 options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="shield-search" size={24} color="black" />
                    ),
                    headerShown: false,
                }}  
            />
            <Tab.Screen 
                 name="Courses" 
                 component={CoursesScreen}
                 options={{
                    tabBarLabel: "My courses",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book-account" size={24} color="black" />
                    ),
                    headerShown: false,
                }}  
            />
            <Tab.Screen 
                 name="Profile" 
                 component={ProfileScreen} 
                 options={{
                    tabBarLabel: "My account",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" size={24} color="black" />
                    ),
                    headerShown: false,
                }}  
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="MyTabs" 
                    component={MyTabs} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Course" 
                    component={Course} 
                />
                <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
                <Stack.Screen name="Lesson" component={Lesson} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
