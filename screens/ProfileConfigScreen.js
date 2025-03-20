import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const ProfileConfigScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Configuración de perfil</Text>

            <Text style={styles.subtitle}>Foto de perfil</Text>
            <Text style={styles.subtitle}>Nombre</Text>
            <Text style={styles.subtitle}>Correo</Text>
            <Text style={styles.subtitle}>Contraseña</Text>
            <Text style={styles.subtitle}>Cursos</Text>

        </ScrollView>
    );
}

export default ProfileConfigScreen;

const styles = StyleSheet.create({
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
});