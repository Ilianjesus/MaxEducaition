import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const RecommendationsScreen = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <Text 
            style={{
                fontSize: 30,
                textAlign: 'center',
                marginTop: "5%"
            }}
            >De acuerdo a tu perfil te recomendamos los siguientes cursos </Text>

            <View style={styles.rectanglesContainer
            }>
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
                <TouchableOpacity style={styles.rectangle} onPress={() => navigation.navigate("Course")} />
            </View>

        </ScrollView>
    )
}

export default RecommendationsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1, // Importante para que el ScrollView tenga espacio
        backgroundColor: "#fff",
        padding: 20
    },
    rectanglesContainer: {
        flex: 1, // Para que ScrollView tome todo el espacio disponible
        marginTop: 20,
        width: "100%",
    },
    rectangle: {
        width: "100%",
        height: 80, 
        backgroundColor: "#086db8", 
        marginBottom: 10,
        borderRadius: 10, 
    },
});
    