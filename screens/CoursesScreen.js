import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const CourseScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%",
                    marginBottom: 30,
                }}
            >
                Mis Cursos
            </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Todos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>En curso</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Completados</Text>
                </TouchableOpacity>
            </View>

            {/* ScrollView que envuelve solo los rectángulos */}
            <ScrollView 
                style={styles.rectanglesContainer}
                contentContainerStyle={{ alignItems: "center" }}
            >
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "5%",
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row", // Poner los botones en fila
        justifyContent: "space-between", // Distribuirlos equitativamente
        alignItems: "center",
        marginBottom: 30,
        paddingHorizontal: 10, // Espaciado a los lados
    },
    button: {
        flex: 1, // Que todos los botones ocupen el mismo espacio
        backgroundColor: "#007bff",
        paddingVertical: 10,
        marginHorizontal: 5, // Espacio entre botones
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    rectanglesContainer: {
        width: "100%",
    },
    rectangle: {
        width: "90%",
        height: 80, 
        backgroundColor: "#086db8", 
        marginBottom: 10,
        borderRadius: 10, 
    }
});

export default CourseScreen;