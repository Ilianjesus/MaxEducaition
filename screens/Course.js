import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Course = () => {
    const navigation = useNavigation();
    const [showDescription, setShowDescription] = useState(false);

    return (
        <ScrollView style={styles.container}>

            <View>
            <Text style={styles.title}>ChatGPT para principiantes</Text>
            <Image
                style={styles.imagecourse}
                source={require("../assets/CursoImagen.png")}
            />
            <Text style={styles.subtitle}>Categoria </Text>
            <Text style={styles.text}>Inteligencia Artificial</Text>

            {/* Pestaña desplegable*/}
            <TouchableOpacity onPress={() => setShowDescription(!showDescription)} >
                <Text style={styles.subtitle}>Descripción del curso</Text>
                <Text style={styles.dropdownIcon}>{showDescription ? "▲" : "▼"}</Text>
            </TouchableOpacity>

            {showDescription && (
                    <Text style={styles.text}>
                        Genera contenido de alta calidad, resume, aprende y maximiza tu productividad como nunca antes, aplicando la ingeniería de entrada eficientemente.
                        Gracias a la inteligencia artificial de Chat GPT podrás generar contenido creativo, impulsar tu marca con contenido específico y optimizado, crear campañas publicitarias, publicaciones para redes sociales, anuncios, email marketing y mucho más.
                        Veremos cómo mejorar con la ayuda de ChatGPT tu comunicación, tu capacidad de resolver problemas y cómo optimizar tus horarios.
                        Además, te enseñaremos cómo prepararte para una entrevista, sea el ámbito que sea. Te podrás anticipar a las preguntas del entrevistador y prepararte.
                        Aprende a ahorrar tiempo con Chat GPT, crea rutinas diarias, automatiza tareas repetitivas e impulsa tu trabajo junto a ChatGPT en el menor tiempo posible.
                        Podrás traducir y adaptar contenido a diferentes idiomas con ChatGPT y hasta generar letras de canciones y músicas creativas.
                    </Text>
                )}
            </View>

            <Text style={styles.subtitle}>Lecciones</Text>
            
            <View
            >
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Lesson")} />
            </View>

            <Text style={styles.subtitle}>Documentos</Text>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5", // Color de fondo suave
        padding: 20,
    },
    title: {
        fontSize: 32,
        color: "#086db8",
        fontWeight: "bold",
        textAlign: "center", // Centrado para mejor legibilidad
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 22,
        color: "#086db8",
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
    },
    text: {
        color: "#002147",
        fontSize: 16,
        lineHeight: 24, // Mejor lectura con mayor interlineado
        textAlign: "justify",
    },
    imagecourse: {
        width: "100%", // Que ocupe el ancho completo de la pantalla
        height: 250, // Altura más compacta
        borderRadius: 10,
        alignSelf: "center",
        marginBottom: 20,
        resizeMode: "contain",
    },
    rectangle: {
        width: "100%",
        height: 50,
        backgroundColor: "#086db8",
        borderRadius: 10, // Bordes redondeados
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    rectangleText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    dropdownButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        borderColor: "#ccc",
        marginBottom: 5,
    },
    dropdownIcon: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#086db8",
    },
});

export default Course;
