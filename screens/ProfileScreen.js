import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons/';

const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={styles.profileContainer}>
                <View style={styles.avatar}>
                    <Ionicons name="person" size={30} color="white" />
                </View>

                <Button title="Edit Profile" onPress={() => navigation.navigate("ProfileConfig")} />

                <Text style={styles.email}> Usuario@example.com </Text>
            </View>

            <View>
            <Text style={styles.counter}>Cursos completados</Text>
            <Text>0</Text>
            <Text style={styles.counter}>Cursos en progreso</Text>
            <Text>0</Text>
            <Text style={styles.counter}>Cursos creados</Text>
            <Text>0</Text>
            </View>

            <TouchableOpacity
            onPress={() => navigation.navigate("Recommendations")}
            style={styles.button}
            >
                <Text style={styles.buttonText}
                >Go to Recommendations Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("CreateCourse")} style={styles.button}>
                <Text style={styles.buttonText}
                >Create a course</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("CursosCreados")} style={styles.button}>
                <Text style={styles.buttonText}
                >Cursos Creados</Text>
            </TouchableOpacity>
                

        </View>
    )
}

export default ProfileScreen;

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
        marginBottom: 0,
        padding: 30,
        
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
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
    counter: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#555",
        padding: 20,
    },
    button: {
        backgroundColor: "#086db8",
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
