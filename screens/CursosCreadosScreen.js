import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";   

const CursosCreadosScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <Text> Cursos Creados </Text>
            <Text> Aca van los cursos creados </Text>

            <Button title="Ver Curso" onPress={() => navigation.navigate("CursoCreado")} /> 

        </ScrollView>
    );
}

export default CursosCreadosScreen;
