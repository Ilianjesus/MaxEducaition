import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const CreateCourse = () => {
    <ScrollView style={styles.container}>
        <Text style={styles.title}>Crear Curso</Text>

        <Text style={styles.subtitle}>Nombre del curso</Text>
        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.subtitle}>Imagen</Text>
        <Text style={styles.subtitle}>Lecciones</Text>
        <Text style={styles.subtitle}>Documentos</Text>

        <Button title="Crear Curso" onPress={() => navigation.navigate("Course")} />

    </ScrollView>
}

export default CreateCourse;

styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flex: 1,
        marginTop: 20,
        width: "100%",
    },
    rectangle: {
        width: "90%",
        height: 80,
        backgroundColor: "#086db8",
        marginBottom: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        marginTop: "20%",
        width: "50%",
        alignSelf: "center",
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 15,
        textAlign: "center",
        color: "white",
    },
});