import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//Screens
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import CoursesScreen from "./screens/CoursesScreen";
import Course from "./screens/Course";
import RecommendationsScreen from "./screens/RecommendationsScreen";


//HOME STACK
const HomeStackNavigator = createNativeStackNavigator();
function HomeStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStackNavigator.Screen name="Course" component={Course} />

        </HomeStackNavigator.Navigator>
    );
}

//SEARCH STACK
const SearchStackNavigator = createNativeStackNavigator();
function SearchStack() {
    return (
        <SearchStackNavigator.Navigator
            initialRouteName="SearchScreen"
        >
            <SearchStackNavigator.Screen name="SearchScreen" component={SearchScreen} />
            <SearchStackNavigator.Screen name="Course" component={Course} />
        </SearchStackNavigator.Navigator>
    );
}

//PROFILE STACK
const ProfileStackNavigator = createNativeStackNavigator();
function ProfileStack() {
    return (
        <ProfileStackNavigator.Navigator
            initialRouteName="ProfileScreen"
        >
            <ProfileStackNavigator.Screen name="ProfileScreen" component={ProfileScreen} />
            <ProfileStackNavigator.Screen name="Recommendations" component={RecommendationsScreen} />
        </ProfileStackNavigator.Navigator>
    );
}


//TAB NAVIGATOR
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "black",
            }}>
                
            <Tab.Screen 
                 name="Home" 
                 component={HomeStack}
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
                 component={SearchStack}
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
                 component={ProfileStack} 
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
            <MyTabs />
        </NavigationContainer>
    );
}