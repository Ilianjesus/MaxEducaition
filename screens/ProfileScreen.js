import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons/';

const PorfileScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.avatar}>
                    <Ionicons name="person" size={30} color="white" />
                </View>
                <Text style={styles.email}> Usuario@example.com </Text>
                <Text style={styles.completedCourses}>Completed Courses: 0</Text>
            </View>

            <TouchableOpacity
            onPress={() => navigation.navigate("Recommendations")}
            style={styles.button}
            >
                <Text style={styles.buttonText}
                >Go to Recommendations Screen</Text>
            </TouchableOpacity>
                

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        padding: 20,
    },
    profileContainer: {
        alignItems: "center",
        marginBottom: 30,
        
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#007bff",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    email: {
        fontSize: 16,
        color: "#333",
        marginBottom: 5,
    },
    completedCourses: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#555",
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 10,
        width: "60%",
        alignItems: "center",
    },
    buttonText: {
        fontSize:15,
        textAlign: "center",
        color: "white",
    }
});

export default PorfileScreen;