import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet,TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

//SCREN 
const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigation = useNavigation();

    const handleSearch = () => {
        console.log("Searching for:", searchQuery);
    };

    const goToCourse = () => {
        navigation.navigate("Course");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¿Que curso quieres comenzar?</Text>
            
            <View style={styles.searchContainer}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Ionicons name="search" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.rectanglesContainer}>
                <TouchableOpacity style={styles.rectangle} onPress={goToCourse}/>
                <TouchableOpacity style={styles.rectangle} onPress={goToCourse}/>
                <TouchableOpacity style={styles.rectangle} onPress={goToCourse}/>
                <TouchableOpacity style={styles.rectangle} onPress={goToCourse}/>
                <TouchableOpacity style={styles.rectangle} onPress={goToCourse}/>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f8f8f8",
        marginTop: 60,
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "bold",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 10,
        backgroundColor: "white"
    },
    searchButton: {
        marginLeft: 10,
        backgroundColor: "#086db8",
        padding: 10,
        borderRadius: 5,
    },
    rectanglesContainer: {
        marginTop: 20,
        width: "100%",
        alignItems: "center",
    },
    rectangle: {
        width: "100%",
        height: 80, // Altura del rectángulo
        backgroundColor: "#086db8", // Color de fondo
        marginBottom: 10, // Espaciado entre rectángulos
        borderRadius: 10, // Bordes redondeados
    }
});

export default SearchScreen;
