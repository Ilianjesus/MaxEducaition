import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Course = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Nombre del curso</Text>

            <Text style={styles.subtitle}>Descripción:</Text>
            <Text>
            Este curso trata sobre...
            </Text>

            <Text style={styles.subtitle}>Lecciones</Text>

            <ScrollView 
                style={styles.rectanglesContainer} 
                contentContainerStyle={{ alignItems: "center", flexGrow: 1 }} // Se agrega flexGrow
            >
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
            </ScrollView>

            <Text style={styles.subtitle}>Documentos</Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Importante para que el ScrollView tenga espacio
        backgroundColor: "#fff",
        padding: 20
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: "5%"
    },
    subtitle: {
        fontSize: 20,
        marginTop: "20%",
        marginLeft: "5%",
        textAlign: "center",
    },
    rectanglesContainer: {
        flex: 1, // Para que ScrollView tome todo el espacio disponible
        marginTop: 20,
        width: "100%",
    },
    rectangle: {
        width: "80%",
        height: 80, 
        backgroundColor: "#086db8", 
        marginBottom: 10,
        borderRadius: 10, 
    },
    button: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        alignSelf: "center",
        marginVertical: 20, // Agregar margen para que no se pegue al final
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
});

export default Course;
