import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import usuarios from "../models/Usuario"; // Importar los datos del usuario
import cursos from "../models/Cursos"; // Importar los cursos

const CourseScreen = () => {
    const navigation = useNavigation();
    const [filter, setFilter] = useState("todos");

    // Obtener los cursos del usuario
    const { completedCourses, inProgressCourses } = usuarios;

    // Filtrar cursos según el estado seleccionado
    const filteredCourses = cursos.filter((curso) => {
        if (filter === "completados") {
            return completedCourses.includes(parseInt(curso.id));
        }
        if (filter === "en curso") {
            return inProgressCourses.includes(parseInt(curso.id));
        }
        return completedCourses.includes(parseInt(curso.id)) || inProgressCourses.includes(parseInt(curso.id));
    });

    return (
        <View style={{ flex: 1, marginTop: 40 }}>
            <Text style={styles.title}>Mis Cursos</Text>

            {/* Botones de filtro */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => setFilter("todos")}>
                    <Text style={styles.buttonText}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setFilter("en curso")}>
                    <Text style={styles.buttonText}>En curso</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setFilter("completados")}>
                    <Text style={styles.buttonText}>Completados</Text>
                </TouchableOpacity>
            </View>

            {/* Lista de cursos */}
            <ScrollView style={styles.rectanglesContainer} contentContainerStyle={{ alignItems: "center" }}>
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((curso) => (
                        <TouchableOpacity
                            key={curso.id}
                            style={styles.rectangle}
                            onPress={() => navigation.navigate("Course", { curso })}
                            >
                            <Text style={styles.courseTitle}>{curso.titulo}</Text>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text style={styles.noCoursesText}>No hay cursos en esta categoría</Text>
                )}
            </ScrollView>
        </View>
    );
};

// Estilos
const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "5%",
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
        paddingHorizontal: 10,
    },
    button: {
        flex: 1,
        backgroundColor: "#007bff",
        paddingVertical: 10,
        marginHorizontal: 5,
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
        justifyContent: "center",
        alignItems: "center",
    },
    courseTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    noCoursesText: {
        textAlign: "center",
        fontSize: 16,
        color: "#777",
    },
});

export default CourseScreen;
