/*
//AVISOOOOO
// Esta vista no se usa en ningun lado ya

import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import cursos from "../models/Cursos";

const RecommendationsScreen = () => {
    const navigation = useNavigation();
    const [cursosRecomendados, setCursosRecomendados] = useState([]);

    useEffect(() => {
        // Selecciona 5 cursos aleatorios
        const cursosAleatorios = [...cursos]
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);
        setCursosRecomendados(cursosAleatorios);
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>
                De acuerdo a tu perfil te recomendamos los siguientes cursos
            </Text>

            <View style={styles.rectanglesContainer}>
                {cursosRecomendados.map((curso, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.rectangle}
                        onPress={() => navigation.navigate("Course", { curso })}
                    >
                        <Text style={styles.cursoTexto}>{curso.titulo}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default RecommendationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    headerText: {
        fontSize: 26,
        textAlign: 'center',
        marginTop: "5%",
        fontWeight: "bold",
        marginBottom: 20,
        color: "#086db8"
    },
    rectanglesContainer: {
        width: "100%",
    },
    rectangle: {
        width: "100%",
        height: 80,
        backgroundColor: "#086db8",
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    cursoTexto: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "600"
    }
});
*/